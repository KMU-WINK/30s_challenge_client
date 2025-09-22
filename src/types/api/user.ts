import type { UUID } from './common';

export interface UserResponse {
  id: UUID;
  name: string;
  email: string;
  nickname?: string;
}

export interface SimpleUserResponse {
  id: UUID;
  name: string;
}
