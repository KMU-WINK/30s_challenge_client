import React from 'react';
import { Icon } from '@iconify/react';
import classnames from 'classnames';
import Avatar from '../../../components/ui/Avatar.tsx';

interface RankCardProps {
  rank: number;
  userId: string;
  name: string;
  consecutiveDays: number;
  isCurrentUser: boolean; // 새로운 prop 추가
}

const RankCard: React.FC<RankCardProps> = ({
  rank,
  userId,
  name,
  consecutiveDays,
  isCurrentUser,
}) => {
  const cardClasses = classnames(
    'inline-flex w-80 items-center justify-center gap-4 rounded-lg px-4 py-2 outline outline-[0.50px]',
    {
      // isCurrentUser 값에 따라 클래스를 조건부로 적용합니다.
      'bg-blue-100 outline-blue-300': isCurrentUser,
      'bg-white outline-neutral-200': !isCurrentUser,
    },
  );

  return (
    <div className={cardClasses}>
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
          <div className="relative h-4 w-4">
            <Icon
              icon="heroicons:arrow-trending-up-mini"
              className="h-4 w-4 text-neutral-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
