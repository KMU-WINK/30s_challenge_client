const BASE = import.meta.env.VITE_API_BASE ?? '';
async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(BASE + url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    ...init,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
export const api = {
  get: <T>(u: string) => request<T>(u),
  post: <T>(u: string, body?: unknown, init?: RequestInit) =>
    request<T>(u, { method: 'POST', body: JSON.stringify(body), ...init }),
};
