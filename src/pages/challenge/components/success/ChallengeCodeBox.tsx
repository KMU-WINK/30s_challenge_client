import React from 'react';

interface ChallengeCodeBoxProps {
  code: string;
}

const ChallengeCodeBox: React.FC<ChallengeCodeBoxProps> = ({ code }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 self-stretch rounded-lg bg-slate-100 py-4">
      <div className="text-base font-normal leading-normal text-neutral-500">
        고유코드
      </div>
      <div className="text-base font-medium leading-normal text-black">
        {code}
      </div>
    </div>
  );
};

export default ChallengeCodeBox;
