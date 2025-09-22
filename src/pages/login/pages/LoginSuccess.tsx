import React from 'react';
import Success from '../../../components/Success.tsx';

const ChallengeSuccess: React.FC = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-24 px-10 py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <Success title="회원가입 완료!" />
      </div>
    </div>
  );
};

export default ChallengeSuccess;
