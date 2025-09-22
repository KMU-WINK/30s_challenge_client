import ChallengeCard from './components/ChallengeCard';
import { Icon } from '@iconify/react';

export default function ChallengeSelect() {
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
        <ChallengeCard
          id={1}
          name="러닝하기"
          icon="run"
          startAt="2025.09.01"
          endAt="2025.09.30"
          participants={5}
        />
        <ChallengeCard
          id={2}
          name="7시 기상하기"
          icon="bed"
          startAt="2025.09.01"
          endAt="2025.10.30"
          participants={5}
        />
        <ChallengeCard
          id={3}
          name="백준 풀기"
          icon="coding"
          startAt="2025.09.01"
          endAt="2025.11.30"
          participants={5}
        />
      </section>
    </main>
  );
}
