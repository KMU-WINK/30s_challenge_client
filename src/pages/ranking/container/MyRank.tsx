import { Icon } from '@iconify/react';
import MyRankCard from './MyRankCard.tsx';
import type { UserResponse } from '../../../types/api/user.ts';
import { useLoaderData } from 'react-router-dom';

export default function MyRank() {
  const data = useLoaderData() as { me?: UserResponse; challenges?: never[] };

  if (!data?.me) {
    return <div>내 정보를 불러오는 중...</div>;
  }

  const { me } = data;

  const myRankingData = {
    rank: 2,
    userId: me.id,
    name: me.name,
    streak: 15,
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
          consecutiveDays={myRankingData.streak}
        />
      </div>
    </section>
  );
}
