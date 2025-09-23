import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface PersonCountFieldProps {
  label: string;
  value: number | null;
  onChange: (count: number) => void;
}

const PersonCountField: React.FC<PersonCountFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (count: number) => {
    onChange(count); // 부모 컴포넌트의 상태를 업데이트합니다.
    setIsOpen(false);
  };

  const counts = [2, 3, 4, 5, 6];

  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium leading-tight text-black">
          {label}
        </label>
        <div
          className="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm transition-colors hover:border-primary"
          onClick={toggleDropdown}
        >
          <span
            className={`flex-1 text-sm font-normal ${value ? 'text-black' : 'text-neutral-400'}`}
          >
            {value ? `${value}명` : '인원 수를 선택해주세요'}
          </span>
          <Icon
            icon="heroicons:chevron-down"
            className={`h-4 w-4 text-neutral-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white shadow-lg outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
          {counts.map((count) => (
            <div
              key={count}
              className={`flex cursor-pointer items-center justify-center border-b-[0.50px] border-neutral-200 px-3 py-2 transition-colors hover:bg-success-background`}
              onClick={() => handleSelect(count)}
            >
              <span className="text-sm font-normal leading-tight text-neutral-500">
                {count}명
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonCountField;
