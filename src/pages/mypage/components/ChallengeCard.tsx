import React from 'react';
import Badge from '../../../components/ui/Badge.tsx';
import { Icon } from '@iconify/react';

interface ChallengeCardProps {
  taskName: string;
  status: '진행중' | '완료';
  successRate: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  taskName,
  status,
  successRate,
}) => {
  return (
    // 메인 컨테이너
    <div className="flex w-full items-center justify-between rounded-lg bg-white p-3 outline outline-1 outline-neutral-200">
      <div className="flex items-center gap-2 py-2">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${status === '진행중' ? 'bg-slate-100' : 'bg-green-100'} `}
        >
          {status === '진행중' ? (
            <Icon
              icon="heroicons-outline:clock"
              className="h-6 w-6 text-primary"
            />
          ) : (
            <Icon
              icon="heroicons-outline:check-circle"
              className="h-6 w-6 text-success"
            />
          )}
        </div>

        {/* 작업명과 뱃지 */}
        <div className="flex items-center gap-2 py-2">
          <span className="text-base font-medium leading-normal text-black">
            {taskName}
          </span>
          <Badge status={status} />
        </div>
      </div>

      {/* 오른쪽 섹션: 성공률 텍스트 */}
      <div className="text-xs font-light leading-none text-black">
        성공률 {successRate}%
      </div>
    </div>
  );
};

export default ChallengeCard;
