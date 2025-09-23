import React from 'react';
import { Icon } from '@iconify/react';
import Avatar from '../../../components/ui/Avatar.tsx';

interface MyRankCardProps {
  rank: number;
  userId: string;
  name: string;
  consecutiveDays: number;
}

const MyRankCard: React.FC<MyRankCardProps> = ({
  rank,
  userId,
  name,
  consecutiveDays,
}) => {
  return (
    <div className="inline-flex w-80 items-center justify-center gap-4 rounded-lg bg-slate-100 px-4 py-2 outline outline-[0.50px] outline-blue-300">
      {/* 순위 번호 */}
      <div className="justify-start text-xl font-bold leading-7 text-black">
        {rank}
      </div>

      <div className="flex flex-1 items-center justify-between">
        <Avatar id={userId} name={name} size="small" />

        {/* 연속 출석일수 */}
        <div className="flex items-center justify-center gap-1">
          <div className="justify-start text-center text-sm font-medium leading-tight text-neutral-600">
            {consecutiveDays}일 연속
          </div>
          {/* 연속 출석 아이콘 */}
          <div className="relative h-4 w-4">
            <Icon
              icon="heroicons-micro:arrow-trending-up"
              className="h-4 w-4 text-neutral-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRankCard;
