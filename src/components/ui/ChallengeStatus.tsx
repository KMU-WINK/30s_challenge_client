import React from 'react';
import { Icon } from '@iconify/react';

interface ChallengeStatusProps {
  title: string;
  description: string;
}

const ChallengeStatus: React.FC<ChallengeStatusProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 text-center">
      <Icon
        icon="streamline-color:party-popper-flat"
        width="80"
        height="80"
        className="text-gray-800"
      />
      <div className="text-2xl font-bold text-gray-800">{title}</div>
      <div className="font-['Pretendard_Variable'] text-base font-normal leading-normal text-neutral-500">
        {description}
      </div>
    </div>
  );
};

export default ChallengeStatus;
