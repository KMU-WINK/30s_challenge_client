import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ChallengeIcon from '../../components/ui/ChallengeIcon';
import RankCard from './components/RankCard';
import ChallengeJoinModal from '../challenge/components/ChallengeJoinModal';
import type { ChallengeListResponse } from '../../types/api/challenge';
import type { UserResponse } from '../../types/api/user.ts';

export default function Home() {
  const { me, challenges } = useLoaderData() as {
    me: UserResponse;
    challenges: ChallengeListResponse;
  };

  const hasChallenges = challenges.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  const firstEight = challenges.slice(0, 8);

  return (
    <main className="flex min-h-0 w-full flex-1 flex-col gap-6 px-6">
      <div className="flex flex-col items-start justify-start gap-1">
        <p className="text-lg font-semibold text-neutral-700">
          안녕하세요, {me.name}님 👋
        </p>
        <p className="text-neutral-400">오늘도 30Days 챌린지에 도전해보세요!</p>
      </div>
      <section className="flex w-full gap-3">
        <Link
          to="/challenge/join"
          className="group flex w-full items-center gap-3 rounded-lg bg-white p-3 outline outline-[0.5px] outline-neutral-200 transition hover:-translate-y-0.5 hover:shadow-base"
        >
          <div className="rounded-lg bg-indigo-100 p-2 group-hover:bg-indigo-200">
            <Icon icon="ic:round-plus" className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="text-start">
            <p className="font-semibold">챌린지 개설</p>
            <p className="text-sm text-neutral-500">챌린지 만들기</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex w-full items-center gap-4 rounded-lg bg-white p-4 outline outline-[0.5px] outline-neutral-200 transition hover:-translate-y-0.5 hover:shadow-base"
        >
          <div className="rounded-lg bg-blue-100 p-2 group-hover:bg-blue-200">
            <Icon icon="ion:people-outline" className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-start">
            <p className="font-semibold">챌린지 참여</p>
            <p className="text-sm text-neutral-500">챌린지 참여하기</p>
          </div>
        </button>
      </section>

      <section className="flex w-full flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <Icon
              icon="streamline-plump-color:loading-circle"
              className="h-6 w-6"
            />
            <span className="justify-start text-lg font-semibold">
              진행 중인 챌린지
            </span>
          </div>
          <Link to="/checking">
            <Icon icon="ic:round-plus" className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>

        {hasChallenges ? (
          <div className="grid grid-cols-4 justify-start gap-5">
            {firstEight.map((c) => (
              <Link
                key={c.id}
                to={`/my/${c.id}/detail`}
                className="flex items-center justify-center"
              >
                <ChallengeIcon
                  label={c.icon}
                  size="default"
                  bgColor="bg-primary-background transition hover:-translate-y-0.5 hover:shadow-base"
                  iconColor="text-primary"
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center gap-4 py-8 font-medium">
              <span className="text-sm text-neutral-600">
                진행중인 챌린지가 없습니다.
              </span>
              <span className="text-xs text-neutral-400">
                챌린지를 개설하거나 참여해보세요.
              </span>
            </div>
          </div>
        )}
      </section>

      <section className="flex max-h-[40dvh] w-full flex-1 flex-col gap-5 overflow-y-auto rounded-lg bg-white p-4 shadow-base">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">내 랭킹</span>
          <Link to="/ranking">
            <Icon icon="ic:round-plus" className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>

        {hasChallenges ? (
          <div className="min-h-0 flex-1 space-y-5 overflow-y-auto">
            {challenges.map((c, i) => (
              <Link
                key={c.id}
                to={`/my/${c.id}/detail`}
                className="block transition hover:-translate-y-0.5 hover:shadow-base"
              >
                <RankCard
                  label={c.icon}
                  rank={i + 1}
                  name={c.name}
                  streak={15 - i * 3}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-sm font-medium text-neutral-600">
              진행중인 챌린지가 없습니다.
            </p>
          </div>
        )}
      </section>

      {isOpen && <ChallengeJoinModal onClose={() => setIsOpen(false)} />}
    </main>
  );
}
