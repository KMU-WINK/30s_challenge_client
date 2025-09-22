import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Avatar from '../../../components/ui/Avatar.tsx';

interface ProfileCardProps {
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('MyProfile');
  };

  return (
    // 전체 컨테이너
    <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-3 shadow-md">
      {/* 상단: '내 프로필' 제목 */}
      <div className="inline-flex items-center justify-start gap-3">
        <Icon
          icon="streamline-color:user-profile-focus-flat"
          className="h-7 w-7"
        />
        <div className="text-lg font-semibold leading-7 text-black">
          내 프로필
        </div>
      </div>

      <div
        className="inline-flex w-full cursor-pointer items-center justify-between"
        onClick={handleNavigate}
      >
        <Avatar name={name} size="large" />

        <div className="flex h-5 w-5 items-center justify-center">
          <Icon
            icon="heroicons-outline:chevron-right"
            className="h-5 w-5"
          ></Icon>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
