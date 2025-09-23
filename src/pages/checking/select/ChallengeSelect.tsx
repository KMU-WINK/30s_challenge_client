import ChallengeCard from './components/ChallengeCard';
import { Icon } from '@iconify/react';
import { Link, useLoaderData } from 'react-router-dom';
import type { ChallengeListResponse } from '../../../types/api/challenge';

export default function ChallengeSelect() {
  const { challenges } = useLoaderData() as {
    challenges: ChallengeListResponse;
  };

  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center gap-6 px-6">
      <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
        <div className="flex items-center justify-start gap-3">
          <Icon
            icon="streamline-plump-color:loading-circle"
            className="h-6 w-6"
          />
          <span className="text-lg font-semibold">진행 중인 챌린지</span>
        </div>

        {challenges.length === 0 ? (
          <div className="py-8 text-center text-sm text-neutral-500">
            진행 중인 챌린지가 없습니다.
          </div>
        ) : (
          challenges.map((c) => (
            <Link key={c.id} to={`/checking/${c.id}/verify`} className="block">
              <ChallengeCard
                id={c.id}
                name={c.name}
                icon={c.icon}
                startAt={c.startAt}
                endAt={c.endAt}
                participants={c.limits}
              />
            </Link>
          ))
        )}
      </section>
    </main>
  );
}
