import { Icon } from '@iconify/react';
import MyRankCard from './MyRankCard.tsx';

const MyrankingData = [
  { rank: 1, userId: 'user1', name: '홍길동', consecutiveDays: 15 },
];

export default function Myrank() {
  return (
    <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
      <div className="flex items-center justify-start gap-3">
        <Icon icon="streamline-flex-color:trophy-flat" className="h-6 w-6" />
        <span className="text-lg font-semibold">내 랭킹</span>
      </div>

      <div className="flex w-full flex-col gap-5">
        {MyrankingData.map((user) => (
          <MyRankCard
            key={user.userId} // React에서 리스트를 렌더링할 때 필요한 고유한 key prop입니다.
            rank={user.rank}
            userId={user.userId}
            name={user.name}
            consecutiveDays={user.consecutiveDays}
          />
        ))}
      </div>
    </section>
  );
}
