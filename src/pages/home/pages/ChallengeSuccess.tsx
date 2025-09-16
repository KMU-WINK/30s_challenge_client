import React from 'react';
import Button from '../../../components/ui/Button.tsx';
import ChallengeStatus from '../../../components/ui/ChallengeStatus.tsx';
import ChallengeCodeBox from '../components/ChallengeCodeBox.tsx';

const ChallengeSuccess: React.FC = () => {
  const handleConfirm = () => {
    console.log('확인 버튼 클릭됨');
  };

  return (
    <div className="inline-flex h-screen w-screen flex-col items-start justify-start overflow-hidden bg-white">
      <div className="flex flex-1 flex-col items-start justify-start gap-24 self-stretch p-10">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 self-stretch">
          <ChallengeStatus
            title="챌린지 개설 완료!"
            description="고유코드를 공유해 친구와 함께 도전하세요"
          />

          {/* 고유코드 박스 */}
          <ChallengeCodeBox code="123456" />
        </div>

        {/* 하단 버튼 */}
        <div className="self-stretch">
          <Button size="large" color="primary" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSuccess;
