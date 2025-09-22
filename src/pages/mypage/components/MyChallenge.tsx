import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChallengeCard from './ChallengeCard';
import type { SimpleChallengeResponse } from '../../../types/api/challenge';

const parseLocalDate = (s: string) => {
  const normalized = s.replaceAll('.', '-');
  return new Date(normalized);
};

export type Status = '진행중' | '완료';

type MyChallengeCardProps = {
  id: string;
  name: string;
  status: Status;
  progress: number;
};

const INITIAL_CHALLENGES: SimpleChallengeResponse[] = [
  {
    id: '1',
    name: '러닝하기',
    icon: 'run',
    startAt: '2025-09-01',
    endAt: '2025-09-30',
  },
  {
    id: '2',
    name: '7시 기상하기',
    icon: 'bed',
    startAt: '2025-08-01',
    endAt: '2025-08-31',
  },
  {
    id: '3',
    name: '백준 풀기',
    icon: 'coding',
    startAt: '2025-09-10',
    endAt: '2025-10-10',
  },
];

function computeStatusAndProgress(
  startAtStr: string,
  endAtStr: string,
  now: Date = new Date(),
): { status: Status; progress: number } {
  const start = parseLocalDate(startAtStr);
  const end = parseLocalDate(endAtStr);

  const status: Status = end.getTime() < now.getTime() ? '완료' : '진행중';

  const totalMs = end.getTime() - start.getTime();
  if (totalMs <= 0) {
    return { status: '완료', progress: 100 };
  }
  const elapsedMs = Math.max(
    0,
    Math.min(now.getTime() - start.getTime(), totalMs),
  );
  const progress = Math.round((elapsedMs / totalMs) * 100);

  return { status, progress };
}

export default function MyChallenge() {
  const navigate = useNavigate();
  const [challenges] = useState<SimpleChallengeResponse[]>(INITIAL_CHALLENGES);

  const cards: MyChallengeCardProps[] = useMemo(() => {
    const now = new Date();
    return challenges.map((c) => {
      const { status, progress } = computeStatusAndProgress(
        c.startAt,
        c.endAt,
        now,
      );
      return { id: c.id, name: c.name, status, progress };
    });
  }, [challenges]);

  const handleCardClick = () => {
    navigate('challenge-detail');
  };

  return (
    <div className="flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-4 shadow-base">
      <div className="text-lg font-semibold">내 챌린지</div>

      <div className="flex w-full flex-col gap-5">
        {cards.map(({ id, name, status, progress }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleCardClick()}
            className="w-full cursor-pointer text-left"
          >
            <ChallengeCard name={name} status={status} progress={progress} />
          </button>
        ))}
      </div>
    </div>
  );
}
