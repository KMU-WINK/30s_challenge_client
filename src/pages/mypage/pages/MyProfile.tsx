import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import type { UserResponse } from '../../../types/api/user.ts';

export default function MyProfile() {
  const me = useLoaderData() as UserResponse;

  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-3 shadow-base">
        <div className="text-lg font-semibold">내 정보 관리</div>
        <div
          className="flex w-full items-center justify-between py-3"
          onClick={() => navigate('/edit-name')}
        >
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="justify-start text-base font-semibold">이름</div>
            <div className="justify-start text-center text-sm font-medium text-neutral-500">
              {me.name}
            </div>
          </div>
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5 text-neutral-500"
          ></Icon>
        </div>

        <div
          className="flex w-full items-center justify-between py-3"
          onClick={() => navigate('/edit-email')}
        >
          <div className="inline-flex flex-col items-start justify-start gap-1">
            <div className="justify-start text-base font-semibold">이메일</div>
            <div className="justify-start text-center text-sm font-medium text-neutral-500">
              {me.email}
            </div>
          </div>
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5 text-neutral-500"
          ></Icon>
        </div>

        <div
          className="flex w-full items-center justify-between py-3"
          onClick={() => navigate('/change-password')}
        >
          <span className="justify-start text-base font-semibold">
            비밀번호 변경
          </span>
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5 text-neutral-500"
          ></Icon>
        </div>
      </div>
      <div className="flex w-full justify-center text-xs font-normal text-neutral-500">
        회원탈퇴
      </div>
    </div>
  );
}
