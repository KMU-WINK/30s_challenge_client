import RankCard from './RankCard.tsx';

// API에서 받아온 데이터와 유사하게 순위 정보를 임시로 정의합니다.
const rankingData = [
  { rank: 1, userId: 'user1', name: '홍길동', consecutiveDays: 15 },
  { rank: 2, userId: 'user2', name: '김철수', consecutiveDays: 12 },
  { rank: 3, userId: 'user3', name: '이영희', consecutiveDays: 10 },
];

export default function Allrank() {
  return (
    <div className="flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-4 shadow-base">
      <div className="text-lg font-semibold">내 챌린지</div>

      <div className="flex w-full flex-col gap-5">
        {rankingData.map((user) => (
          <RankCard
            key={user.userId} // React에서 리스트를 렌더링할 때 필요한 고유한 key prop입니다.
            rank={user.rank}
            userId={user.userId}
            name={user.name}
            consecutiveDays={user.consecutiveDays}
          />
        ))}
      </div>
    </div>
  );
}
