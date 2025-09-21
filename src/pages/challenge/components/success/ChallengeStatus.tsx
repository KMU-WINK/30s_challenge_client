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
      <Icon icon="streamline-color:party-popper-flat" className="h-20 w-20" />
      <div className="text-2xl font-medium text-black">{title}</div>
      <div className="text-base font-normal text-neutral-500">
        {description}
      </div>
    </div>
  );
};

export default ChallengeStatus;
