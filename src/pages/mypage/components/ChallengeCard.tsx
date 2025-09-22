import Badge from '../../../components/ui/Badge.tsx';
import { Icon } from '@iconify/react';

interface ChallengeCardProps {
  name: string;
  status: '진행중' | '완료';
  progress: number;
}

export default function ChallengeCard({
  name,
  status,
  progress,
}: ChallengeCardProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-white p-3 outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
      <div className="flex items-center justify-center gap-2">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${status === '진행중' ? 'bg-primary-background' : 'bg-success-background'} `}
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

        <div className="flex items-center justify-center gap-2">
          <span className="text-base font-medium">{name}</span>
          <Badge status={status} />
        </div>
      </div>

      {/* 오른쪽 섹션: 성공률 텍스트 */}
      <div className="text-xs font-light">성공률 {progress}%</div>
    </div>
  );
}
