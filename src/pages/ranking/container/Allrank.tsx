import RankCard from './RankCard.tsx';
import type { SimpleUserResponse } from '../../../types/api/user.ts';

interface AllrankProps {
  me: SimpleUserResponse;
}

const rankingData = [
  // 현재 데이터는 정렬되어 있지만, 순서가 섞여있다고 가정합니다.
  { rank: 1, userId: 'user2', name: '김철수', consecutiveDays: 12 },
  { rank: 2, userId: '1', name: '홍길동', consecutiveDays: 15 },
  { rank: 3, userId: 'user3', name: '이영희', consecutiveDays: 10 },
];

export default function Allrank({ me }: AllrankProps) {
  //순위 정렬
  const sortedRanking = [...rankingData].sort((a, b) => a.rank - b.rank);

  return (
    <div className="flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-4 shadow-base">
      <div className="text-lg font-semibold">전체 랭킹</div>
      <div className="flex w-full flex-col gap-5">
        {sortedRanking.map((user) => (
          <RankCard
            key={user.userId}
            rank={user.rank}
            userId={user.userId}
            name={user.name}
            consecutiveDays={user.consecutiveDays}
            isCurrentUser={user.userId === me.id}
          />
        ))}
      </div>
    </div>
  );
}
