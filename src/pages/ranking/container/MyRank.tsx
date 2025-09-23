import { Icon } from '@iconify/react';
import MyRankCard from './MyRankCard.tsx';
import type { SimpleUserResponse } from '../../../types/api/user.ts';

// Ranking.tsx로부터 'me' 데이터를 props로 받습니다.
interface MyRankProps {
  me: SimpleUserResponse;
}

export default function MyRank({ me }: MyRankProps) {
  const myRankingData = {
    rank: 2, // API에서 받아와야 하는 값
    userId: me.id,
    name: me.name,
    consecutiveDays: 15, // API에서 받아와야 하는 값
  };

  return (
    <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
      <div className="flex items-center justify-start gap-3">
        <Icon icon="streamline-flex-color:trophy-flat" className="h-6 w-6" />
        <span className="text-lg font-semibold">내 랭킹</span>
      </div>

      <div className="flex w-full flex-col gap-5">
        <MyRankCard
          key={myRankingData.userId}
          rank={myRankingData.rank}
          userId={myRankingData.userId}
          name={myRankingData.name}
          consecutiveDays={myRankingData.consecutiveDays}
        />
      </div>
    </section>
  );
}
