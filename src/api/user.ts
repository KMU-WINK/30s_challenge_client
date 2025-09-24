import { api } from './client';
import type { UserResponse } from '../types/api/user';

export const getMyInfo = async (): Promise<UserResponse> => {
  if (import.meta.env.DEV) {
    return { id: '1', name: '홍길동', email: '@google.com' };
  }
  return api.get<UserResponse>('/users/me');
};
