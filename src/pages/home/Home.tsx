import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../../components/ui/Button';
import ChallengeIcon from '../../components/ui/ChallengeIcon';
import RankCard from './components/RankCard';
import ChallengeJoinModal from '../challenge/components/ChallengeJoinModal';
import type { ChallengeListResponse } from '../../types/api/challenge';

export default function Home() {
  const { challenges } = useLoaderData() as {
    challenges: ChallengeListResponse;
  };

  const hasChallenges = challenges.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  const firstEight = challenges.slice(0, 8);

  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center gap-6 px-6">
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
          <Icon
            icon="ic:round-plus"
            onClick={() => setIsOpen(true)}
            className="h-6 w-6 cursor-pointer"
          />
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
                  bgColor="bg-primary-background"
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

      <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
        <div className="flex w-full items-center justify-between">
          <span className="justify-start text-lg font-semibold">내 랭킹</span>
          <Icon icon="ic:round-plus" className="h-6 w-6" />
        </div>

        {hasChallenges ? (
          <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto">
            {challenges.map((c, i) => (
              <Link key={c.id} to={`/my/:${c.id}/detail`}>
                <RankCard
                  key={c.id}
                  label={c.icon}
                  rank={i + 1}
                  name={c.name}
                  streak={15 - i * 3}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-8">
            <p className="text-sm font-medium text-neutral-600">
              진행중인 챌린지가 없습니다.
            </p>
          </div>
        )}
      </section>

      {!hasChallenges && (
        <div className="flex w-full items-center justify-center gap-6">
          <Button
            onClick={() => setIsOpen(true)}
            color="white"
            size="default"
            className="w-full"
          >
            참여하기
          </Button>
          <Button
            to="/challenge/join"
            color="primary"
            size="default"
            className="w-full"
          >
            개설하기
          </Button>
        </div>
      )}

      {isOpen && <ChallengeJoinModal onClose={() => setIsOpen(false)} />}
    </main>
  );
}
