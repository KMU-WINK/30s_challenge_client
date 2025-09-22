import React from 'react';
import Info from './Info.tsx';
import { Icon } from '@iconify/react';
import Badge from '../../../components/ui/Badge.tsx';

const InputBox: React.FC = () => {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch px-4">
      <div className="inline-flex items-center justify-start gap-4 self-stretch">
        {/* 아이콘 컨테이너 */}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-slate-100">
          <Icon
            icon="healthicons:exercise-running"
            className="h-10 w-10 text-primary"
          />
        </div>

        {/* 이름과 상태 정보 */}
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-1">
          <div className="inline-flex items-start justify-start gap-4">
            <div className="justify-start text-base font-semibold leading-normal text-black">
              챌린지 이름
            </div>
            {/* 상태 뱃지 */}
            <div className="flex items-center justify-start gap-4">
              <Badge status="진행중" />
            </div>
          </div>
          <div className="justify-start text-center text-base font-medium leading-normal text-neutral-500">
            러닝하기
          </div>
        </div>
      </div>

      <Info title="챌린지 설명" description="매일 30분씩 러닝하기" />
      <Info title="기간" description="start date ~ end date" />
      <Info title="참여자 수" description="2명" />
    </div>
  );
};

export default InputBox;
