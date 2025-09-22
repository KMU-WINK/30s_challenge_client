import React from 'react';
import Success from '../../../components/Success.tsx';

const CheckingSuccess: React.FC = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-24 px-10 py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <Success title="챌린지 성공!" />
      </div>
    </div>
  );
};

export default CheckingSuccess;
