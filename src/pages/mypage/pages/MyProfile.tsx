import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Info from '../components/Info.tsx';

const MyProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-3 shadow-md">
        <div className="text-lg font-semibold leading-7 text-black">
          내 정보 관리
        </div>
        {/*//1*/}
        <div
          className="inline-flex w-full cursor-pointer items-center justify-between py-3"
          onClick={() => navigate('/edit-name')}
        >
          <Info title="이름" description="홍길동" />
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5"
          ></Icon>
        </div>

        {/*//2*/}
        <div
          className="inline-flex w-full cursor-pointer items-center justify-between py-3"
          onClick={() => navigate('/edit-email')}
        >
          <Info title="이메일" description="@gmail.com" />
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5"
          ></Icon>
        </div>

        {/*//3*/}
        <div
          className="inline-flex w-full cursor-pointer items-center justify-between py-3"
          onClick={() => navigate('/change-password')}
        >
          <Info title="비밀번호 변경" description={''} />
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5"
          ></Icon>
        </div>
      </div>
      <div className="flex w-full justify-center text-xs font-normal leading-none text-neutral-500">
        회원탈퇴
      </div>
    </div>
  );
};

export default MyProfile;
