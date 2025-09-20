import React from 'react';
import ProfileCard from '../components/ProfileCard.tsx';
import MyChallenge from '../components/MyChallenge.tsx';

const myPage: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <ProfileCard name="홍길동" />
      <MyChallenge />
    </div>
  );
};

export default myPage;
