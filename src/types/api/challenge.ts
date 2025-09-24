import type { UUID } from './common';
import type { SimpleUserResponse } from './user.ts';
import type { ChallengeIconLabel } from '../shared/icons.ts';

type LocalDate = `${number}-${number}-${number}`;

export interface SimpleChallengeResponse {
  id: UUID;
  name: string;
  icon: ChallengeIconLabel;
  startedAt: LocalDate;
  endedAt: LocalDate;
}

export interface ChallengeResponse {
  id: UUID;
  name: string;
  description?: string;
  code?: number;
  icon: ChallengeIconLabel;
  startedAt: LocalDate;
  endedAt: LocalDate;
  limits: number;
}

export interface CreateChallengeRequest {
  name: string;
  description?: string;
  icon: ChallengeIconLabel;
  startedAt: LocalDate;
  endedAt: LocalDate;
  limits: number;
}

export interface CreateChallengeResponse {
  id: UUID;
  name: string;
  description?: string;
  code: string;
  icon: ChallengeIconLabel;
  startedAt: LocalDate;
  endedAt: LocalDate;
  limits: number;
}

export type ChallengeListResponse = ChallengeResponse[];

export interface ChallengeDetailsResponse {
  challenge: ChallengeResponse;
  participants: SimpleUserResponse[];
}
