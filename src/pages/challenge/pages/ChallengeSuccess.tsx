import React from 'react';
import Button from '../../../components/ui/Button.tsx';
import ChallengeStatus from '../components/success/ChallengeStatus.tsx';
import ChallengeCodeBox from '../components/success/ChallengeCodeBox.tsx';

const ChallengeSuccess: React.FC = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-24 px-10 py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <ChallengeStatus
          title="챌린지 개설 완료!"
          description="고유코드를 공유해 친구와 함께 도전하세요"
        />

        {/* 고유코드 박스 */}
        <ChallengeCodeBox code="123456" />
      </div>
      {/* 하단 버튼 */}
      <div className="w-full">
        <Button to="/" size="default" color="primary" className="w-full">
          확인
        </Button>
      </div>
    </div>
  );
};

export default ChallengeSuccess;
