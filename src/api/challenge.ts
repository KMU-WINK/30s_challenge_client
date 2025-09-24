import type { ChallengeListResponse } from '../types/api/challenge.ts';

export async function getChallengeList(): Promise<ChallengeListResponse> {
  if (import.meta.env.DEV) {
    return [
      {
        id: '1',
        name: '러닝하기',
        icon: 'run',
        startedAt: '2025-08-01',
        endedAt: '2025-09-01',
        limits: 5,
      },
      {
        id: '2',
        name: '7시 기상',
        icon: 'bed',
        startedAt: '2025-09-01',
        endedAt: '2025-10-30',
        limits: 5,
      },
      {
        id: '3',
        name: '백준 풀기',
        icon: 'coding',
        startedAt: '2025-09-01',
        endedAt: '2025-11-30',
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
