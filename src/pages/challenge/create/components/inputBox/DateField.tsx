import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFieldProps {
  label: string;
  align?: 'start' | 'end';
}

const DateField: React.FC<DateFieldProps> = ({ label, align = 'start' }) => {
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
      <div className="text-sm font-medium text-black">{label}</div>

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
        <Icon icon="heroicons:calendar-solid" className="h-4 w-4" />
      </button>

      {/* 캘린더 컴포넌트: 위치 클래스만 변경 */}
      {isOpen && (
        <div
          className={`absolute top-full z-50 mt-2 ${align === 'end' ? 'right-0' : 'left-0'}`}
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default DateField;
