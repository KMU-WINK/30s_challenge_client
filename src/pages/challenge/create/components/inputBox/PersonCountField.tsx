import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// props의 타입을 정의합니다.
interface PersonCountFieldProps {
  label: string;
}

const PersonCountField: React.FC<PersonCountFieldProps> = ({ label }) => {
  // 인원 수 리스트의 가시성을 관리하는 상태
  const [isOpen, setIsOpen] = useState(false);
  // 선택된 인원 수를 저장하는 상태
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  // 드롭다운의 가시성을 토글합니다.
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 인원 수 선택을 처리합니다.
  const handleSelect = (count: number) => {
    setSelectedCount(count);
    setIsOpen(false); // 선택 후 리스트를 닫습니다.
  };

  const counts = [2, 3, 4, 5, 6];

  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-2">
        {/* 필드 레이블 */}
        <label className="text-sm font-medium leading-tight text-black">
          {label}
        </label>

        {/* 클릭 가능한 "입력" 박스 */}
        <div
          className="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm transition-colors hover:border-primary"
          onClick={toggleDropdown}
        >
          {/* 선택된 인원 수 또는 플레이스홀더 텍스트를 표시합니다. */}
          <span
            className={`flex-1 text-sm font-normal ${selectedCount ? 'text-black' : 'text-neutral-400'}`}
          >
            {selectedCount ? `${selectedCount}명` : '인원 수를 선택해주세요'}
          </span>
          {/* 드롭다운 화살표 아이콘 */}
          <Icon
            icon="heroicons:chevron-down"
            className={`h-4 w-4 text-neutral-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* 박스를 클릭했을 때 나타나는 드롭다운 리스트 */}
      {isOpen && (
        <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white shadow-lg outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-200">
          {counts.map((count, index) => (
            <div
              key={count}
              className={`flex cursor-pointer items-center justify-center px-3 py-2 transition-colors hover:bg-success-background ${index < counts.length - 1 ? 'border-b-[0.50px] border-neutral-200' : ''}`}
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
