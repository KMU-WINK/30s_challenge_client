import ChallengeIcon, {
  type ChallengeIconLabel,
} from '../../../../components/ui/ChallengeIcon';
import { Icon } from '@iconify/react';
import type { Challenge } from '../../../../types/challenge';

type Props = Challenge & {
  participants?: number;
  progress?: number;
};

export default function ChallengeCard({
  name,
  icon,
  startAt,
  endAt,
  participants = 5,
  progress,
}: Props) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-5 outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
      <ChallengeIcon
        label={icon as ChallengeIconLabel}
        size="default"
        bgColor="bg-secondary-background"
        iconColor="text-secondary"
      />

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between">
          <span className="text-lg font-medium text-black">{name}</span>
          <div className="flex items-center justify-center gap-0.5 text-xs">
            <Icon
              icon="material-symbols:person-rounded"
              className="h-3 w-3 text-primary"
            />
            <span className="text-primary">{participants}</span>
          </div>
        </div>

        <span className="text-sm font-normal text-neutral-500">
          {startAt} ~ {endAt}
        </span>

        <div className="mt-1 h-3.5 w-full rounded-[5px] bg-neutral-200">
          <div
            className="h-3.5 rounded-[5px] bg-primary"
            style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
