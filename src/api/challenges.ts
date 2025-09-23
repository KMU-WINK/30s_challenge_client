import type { ChallengeIconLabel } from '../types/shared/icons.ts';

interface CreateChallengeRequest {
  name: string;
  description: string;
  icon: ChallengeIconLabel;
  startedAt: string;
  endedAt: string;
  limits: number;
}

export async function createChallenge(challengeData: CreateChallengeRequest) {
  const API_BASE_URL = 'http://localhost:8080/api';

  const response = await fetch(`${API_BASE_URL}/users/challenges`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(challengeData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '챌린지 개설에 실패했습니다.');
  }

  return response.json();
}
