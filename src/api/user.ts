import { api } from './client';
import type { UserResponse } from '../types/api/user.ts';
export const getMyInfo = () => api.get<UserResponse>('/users/me');
