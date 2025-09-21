import { Icon } from '@iconify/react';
import Button from '../../components/ui/Button.tsx';
import ChallengeIcon from '../../components/ui/ChallengeIcon.tsx';
import RankCard from './components/rank-card.tsx';

export default function Home() {
  const activeChallenges: Array<{ id: number }> = [];

  const hasChallenges = activeChallenges.length > 0;

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
          <Icon icon="ic:round-plus" className="h-6 w-6" />
        </div>

        {hasChallenges ? (
          <div className="grid grid-cols-4 justify-start gap-5 overflow-y-auto">
            <ChallengeIcon
              label="run"
              size="default"
              bgColor="bg-primary-background"
              iconColor="text-primary"
            />
            <ChallengeIcon
              label="bed"
              size="default"
              bgColor="bg-primary-background"
              iconColor="text-primary"
            />
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
            <RankCard rank={1} name="러닝하기" streak={15} />
            <RankCard rank={2} name="7시 기상하기" streak={12} />
            <RankCard rank={3} name="백준 풀기" streak={7} />
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
            to="/challenge/join"
            color="white"
            size="default"
            className="w-full"
          >
            참여하기
          </Button>
          <Button
            to="/challenge/create"
            color="primary"
            size="default"
            className="w-full"
          >
            개설하기
          </Button>
        </div>
      )}
    </main>
  );
}
