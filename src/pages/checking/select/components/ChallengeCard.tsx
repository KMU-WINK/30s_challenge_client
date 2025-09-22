import ChallengeIcon from '../../../../components/ui/ChallengeIcon';
import { Icon } from '@iconify/react';
import type { Challenge } from '../../../../types/challenge';

type Props = Challenge & {
  participants?: number;
  progress?: number;
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function parseLocalDate(d: string) {
  const [y, m, day] = d.split('.').map(Number);
  return new Date(y, (m ?? 1) - 1, day ?? 1); // 로컬 자정
}

function progressFromDates(startAt: string, endAt: string, now = new Date()) {
  const start = parseLocalDate(startAt);
  const end = parseLocalDate(endAt);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) return 0;

  const startMs = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  ).getTime();
  const endMs = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate(),
  ).getTime();
  const todayMs = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  ).getTime();

  if (todayMs <= startMs) return 0;
  if (todayMs >= endMs) return 1;

  const ratio = (todayMs - startMs) / (endMs - startMs);
  return clamp01(ratio);
}

export default function ChallengeCard({
  name,
  icon,
  startAt,
  endAt,
  participants = 5,
  progress,
}: Props) {
  const computed =
    progress ?? progressFromDates(String(startAt), String(endAt));

  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-5 outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
      <ChallengeIcon
        label={icon}
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
            style={{ width: `${computed * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
