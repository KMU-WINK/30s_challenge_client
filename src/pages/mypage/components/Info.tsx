import React from 'react';

interface InfoProps {
  title: string;
  description: string;
}

const Info: React.FC<InfoProps> = ({ title, description }) => {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-1">
      <div className="justify-start text-base font-semibold leading-normal text-black">
        {title}
      </div>
      <div className="justify-start text-center font-medium leading-tight text-neutral-500">
        {description}
      </div>
    </div>
  );
};
export default Info;
