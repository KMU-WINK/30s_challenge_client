// src/components/common/DateField.tsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFieldProps {
  label: string;
}

const DateField: React.FC<DateFieldProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-flex flex-1 flex-col items-start justify-start gap-2">
      <div className="text-sm font-medium leading-tight text-black">
        {label}
      </div>

      <button
        type="button"
        className="inline-flex h-10 items-center justify-between gap-2 self-stretch rounded-lg bg-white px-3 outline outline-1 outline-offset-[-1px] outline-neutral-300 transition-colors hover:outline-primary"
        onClick={handleButtonClick}
      >
        <div className="flex items-center justify-start gap-5">
          <div className="text-sm font-normal leading-tight text-neutral-400">
            {selectedDate
              ? selectedDate.toLocaleDateString('ko-KR')
              : '연도. 월. 일'}
          </div>
        </div>
        <Icon icon="heroicons:calendar-solid" width="16" height="16" />
      </button>

      {/* 캘린더 컴포넌트: 위치 클래스만 변경 */}
      {isOpen && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          className="absolute left-0 top-full z-10 mt-2"
        />
      )}
    </div>
  );
};

export default DateField;
