import type { ChallengeListResponse } from '../types/api/challenge.ts';

export async function getChallengeList(): Promise<ChallengeListResponse> {
  if (import.meta.env.DEV) {
    return [
      {
        id: '1',
        name: '러닝하기',
        icon: 'run',
        startAt: '2025-08-01',
        endAt: '2025-09-01',
        limits: 5,
      },
      {
        id: '2',
        name: '7시 기상',
        icon: 'bed',
        startAt: '2025-09-01',
        endAt: '2025-10-30',
        limits: 5,
      },
      {
        id: '3',
        name: '백준 풀기',
        icon: 'coding',
        startAt: '2025-09-01',
        endAt: '2025-11-30',
        limits: 5,
      },
    ];
  }
  const res = await fetch('/api/challenges', {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to load challenges');
  return res.json();
}
