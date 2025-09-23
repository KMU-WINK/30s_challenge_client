import React from 'react';
import { Icon } from '@iconify/react';
import DateField from './inputBox/DateField.tsx';
import FormField from './inputBox/FormField.tsx';
import PersonCountField from './inputBox/PersonCountField.tsx';
import ChallengeIconPicker from './ChallengeIconPicker.tsx';
import type { ChallengeIconLabel } from '../../../../types/shared/icons.ts';

interface InfoBoxProps {
  challengeName: string;
  setChallengeName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  chosenIcon: ChallengeIconLabel | null;
  setChosenIcon: (value: ChallengeIconLabel | null) => void;
  personCount: number | null;
  setPersonCount: (count: number) => void;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  challengeName,
  setChallengeName,
  description,
  setDescription,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  chosenIcon,
  setChosenIcon,
  personCount,
  setPersonCount,
}) => {
  return (
    <div className="flex flex-col gap-5 self-stretch rounded-lg bg-white p-3 shadow-base">
      <div className="flex items-center gap-3">
        <Icon icon="fluent:pen-24-filled" className="h-4 w-4" />
        <div className="text-lg font-semibold text-black">기본 정보 입력</div>
      </div>

      <div className="inline-flex flex-col items-start justify-start gap-6 self-stretch px-4 py-5">
        <div className="flex items-center gap-4 self-stretch">
          <div className="flex items-center gap-3">
            <ChallengeIconPicker value={chosenIcon} onChange={setChosenIcon} />
          </div>
          <div className="flex-1">
            <FormField
              label="챌린지 이름"
              placeholder="예: 알고리즘 복습하기"
              value={challengeName}
              onChange={(e) => setChallengeName(e.target.value)}
            />
          </div>
        </div>

        <FormField
          label="챌린지 설명 (선택사항)"
          placeholder="챌린지에 대한 간단한 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex w-full gap-3">
          <DateField
            label="시작일"
            align="start"
            value={startDate}
            onChange={setStartDate}
          />
          <DateField
            label="종료일"
            align="end"
            value={endDate}
            onChange={setEndDate}
          />
        </div>

        <PersonCountField
          label="인원 수 설정"
          value={personCount}
          onChange={setPersonCount}
        />
      </div>
    </div>
  );
};

export default InfoBox;
