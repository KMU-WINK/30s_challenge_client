import type { UUID } from './common';
import type { SimpleUserResponse } from './user.ts';
import type { ChallengeIconLabel } from '../shared/icons.ts';

type LocalDate = `${number}-${number}-${number}`;

export interface SimpleChallengeResponse {
  id: UUID;
  name: string;
  icon: ChallengeIconLabel;
  startAt: LocalDate;
  endAt: LocalDate;
}

export interface ChallengeResponse {
  id: UUID;
  name: string;
  description?: string;
  code: string;
  icon: ChallengeIconLabel;
  startAt: LocalDate;
  endAt: LocalDate;
  limits: number;
}

export interface CreateChallengeRequest {
  name: string;
  description?: string;
  icon: ChallengeIconLabel;
  startAt: LocalDate;
  endAt: LocalDate;
  limits: number;
}

export type ChallengeListResponse = ChallengeResponse[];

export interface ChallengeDetailsResponse {
  challenge: ChallengeResponse;
  participants: SimpleUserResponse[];
}
