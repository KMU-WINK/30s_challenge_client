import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import DateField from './inputBox/DateField.tsx';
import FormField from './inputBox/FormField.tsx';
import PersonCountField from './inputBox/PersonCountField.tsx';
import ChallengeIconPicker from './ChallengeIconPicker.tsx';
import type { ChallengeIconLabel } from '../../../../types/shared/icons.ts';

const InfoBox: React.FC = () => {
  // 로컬 상태 선언
  const [challengeName, setChallengeName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [chosen, setChosen] = useState<ChallengeIconLabel | null>(null);

  return (
    <div className="flex flex-col gap-5 self-stretch rounded-lg bg-white p-3 shadow-base">
      {/* 기본 정보 입력 */}
      <div className="flex items-center gap-3">
        <Icon icon="fluent:pen-24-filled" className="h-4 w-4" />
        <div className="text-lg font-semibold text-black">기본 정보 입력</div>
      </div>

      {/* 필드 컨테이너 */}
      <div className="inline-flex flex-col items-start justify-start gap-6 self-stretch px-4 py-5">
        {/* 챌린지 이름 (왼쪽에 동그란 원 추가) */}
        <div className="flex items-center gap-4 self-stretch">
          {/* 동그란 원 */}
          <div className="flex items-center gap-3">
            {/* 기존 + 아이콘 자리 */}
            <ChallengeIconPicker value={chosen} onChange={setChosen} />
          </div>

          <div className="flex-1">
            <FormField
              label="챌린지 이름"
              placeholder="예: 알고리즘 복습하기"
              value={challengeName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setChallengeName(e.target.value)
              }
            />
          </div>
        </div>

        <FormField
          label="챌린지 설명 (선택사항)"
          placeholder="챌린지에 대한 간단한 설명"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />

        <div className="flex w-full gap-3">
          <DateField label="시작일" align="start" />
          <DateField label="종료일" align="end" />
        </div>

        <PersonCountField label="인원 수 설정" />
      </div>
    </div>
  );
};

export default InfoBox;
