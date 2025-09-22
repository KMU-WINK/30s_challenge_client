import React from 'react';
import { Icon } from '@iconify/react';

interface SuccessProps {
  title: string;
}

const Success: React.FC<SuccessProps> = ({ title }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <Icon icon="streamline-color:party-popper-flat" className="h-20 w-20" />
      <div className="text-2xl font-medium text-black">{title}</div>
    </div>
  );
};

export default Success;
