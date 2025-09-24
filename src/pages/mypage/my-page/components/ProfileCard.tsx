import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Avatar from '../../../../components/ui/Avatar.tsx';
import type { SimpleUserResponse } from '../../../../types/api/user.ts';

export default function ProfileCard({ id, name }: SimpleUserResponse) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/my/profile');
  };

  return (
    <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
      <div className="flex items-center justify-start gap-3">
        <Icon
          icon="streamline-color:user-profile-focus-flat"
          className="h-6 w-6"
        />
        <span className="text-lg font-semibold">내 프로필</span>
      </div>

      <div
        className="flex w-full items-center justify-between"
        onClick={handleNavigate}
      >
        <Avatar id={id} name={name} size="large" />
        <Icon icon="heroicons-outline:chevron-right" className="h-5 w-5" />
      </div>
    </section>
  );
}
