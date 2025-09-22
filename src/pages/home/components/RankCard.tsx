import ChallengeIcon from '../../../components/ui/ChallengeIcon.tsx';
import { Icon } from '@iconify/react';

interface RankProps {
  rank: number;
  name: string;
  streak: number;
}

export default function RankCard({ rank, name, streak }: RankProps) {
  return (
    <div className="flex items-center justify-start gap-5 rounded-lg bg-white px-5 py-2 outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
      <span className="flex text-xl font-bold">{rank}</span>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <ChallengeIcon
            label="run"
            size="small"
            bgColor="bg-primary-background"
            iconColor="text-primary"
          />
          <span className="text-base font-medium">{name}</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-neutral-600">
          <span className="text-xs font-medium">{streak}days</span>
          <Icon icon="fluent:arrow-trending-12-filled" className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
