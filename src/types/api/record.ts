import type { SimpleUserResponse } from './user.ts';
import type { SimpleChallengeResponse } from './challenge.ts';

type LocalDate = `${number}-${number}-${number}`;

export interface DailyRecordResponse extends SimpleChallengeResponse {
  createdAt: LocalDate;
  isCompleted: boolean;
}

export type ListDailyRecordResponse = DailyRecordResponse[];

export interface StreakResponse {
  user: SimpleUserResponse;
  challenge: SimpleChallengeResponse;
  streak: number;
}
