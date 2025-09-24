const BASE = import.meta.env.VITE_API_BASE_URL ?? '';

async function request<T>(url: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(BASE + url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
    ...init,
  });

  if (res.ok) {
    return res.json() as Promise<T>;
  }

  const fallback = '요청 실패';
  let msg = fallback;

  const raw = await res.text().catch(() => '');

  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && 'message' in parsed) {
        msg = String((parsed as { message?: unknown }).message ?? fallback);
      } else {
        msg = raw;
      }
    } catch {
      msg = raw;
    }
  }

  throw new Error(msg);
}

export const api = {
  get: <T>(u: string) => request<T>(u),
  post: <T>(u: string, body?: unknown) =>
    request<T>(u, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),
  put: <T>(u: string, body?: unknown) =>
    request<T>(u, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),
  del: <T>(u: string) => request<T>(u, { method: 'DELETE' }),
};
