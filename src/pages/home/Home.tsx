import { Icon } from '@iconify/react';
import ChallengeIcon from '../../components/ui/ChallengeIcon.tsx';
import RankCard from './components/rank-card.tsx';

export default function Home() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center gap-6 px-6">
      <section className="flex w-full flex-col gap-5 rounded-lg bg-white p-3 shadow-base">
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
        <div className="flex justify-start gap-5">
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
      </section>
      <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-3 shadow-base">
        <div className="flex w-full items-center justify-between">
          <span className="justify-start text-lg font-semibold">내 랭킹</span>
          <Icon icon="ic:round-plus" className="h-6 w-6" />
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto">
          <RankCard rank={1} name={'러닝하기'} streak={15} />
          <RankCard rank={2} name={'7시 기상하기'} streak={12} />
          <RankCard rank={3} name={'백준 풀기'} streak={7} />
        </div>
      </section>
    </main>
  );
}
