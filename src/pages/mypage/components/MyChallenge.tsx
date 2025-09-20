import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChallengeCard from './ChallengeCard';

interface Challenge {
  id: string;
  taskName: string;
  status: '진행중' | '완료';
  successRate: number;
}

// 챌린지 더미 데이터 배열 (최초 상태)
const INITIAL_CHALLENGES: Challenge[] = [
  {
    id: 'challenge1',
    taskName: '매일 운동하기',
    status: '진행중',
    successRate: 70,
  },
  {
    id: 'challenge2',
    taskName: '매주 책 한 권 읽기',
    status: '완료',
    successRate: 100,
  },
  {
    id: 'challenge3',
    taskName: '매주 책 한 권 읽기',
    status: '완료',
    successRate: 80,
  },
];

const MyChallenge: React.FC = () => {
  const navigate = useNavigate();
  // useState를 이용해 챌린지 목록을 상태로 관리
  const [challenges] = useState<Challenge[]>(INITIAL_CHALLENGES);

  const handleCardClick = (challengeId: string) => {
    navigate(`/ChallengeDetails/${challengeId}`);
  };

  return (
    <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-3 shadow-md">
      <div className="text-lg font-semibold leading-7 text-black">
        내 챌린지
      </div>

      {/* 챌린지 목록 렌더링 */}
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          onClick={() => handleCardClick(challenge.id)}
          className="w-full cursor-pointer"
        >
          <ChallengeCard
            taskName={challenge.taskName}
            status={challenge.status}
            successRate={challenge.successRate}
          />
        </div>
      ))}
    </div>
  );
};

export default MyChallenge;
