import React from 'react';
import Button from '../../../components/ui/Button.tsx';
import InfoBox from '../components/InfoBox.tsx';

const ChallengeCreate: React.FC = () => {
  const handleConfirm = () => {
    console.log('확인 버튼 클릭됨');
  };

  return (
    // <div className="inline-flex h-screen w-screen flex-col items-start justify-start overflow-hidden bg-white">
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      {/*<div className="flex flex-1 flex-col items-center justify-center gap-6 self-stretch">*/}
      <InfoBox />
      {/*</div>*/}

      {/* 하단 버튼 */}
      <div className="self-stretch">
        <Button size="large" color="primary" onClick={handleConfirm}>
          챌린지 개설하기
        </Button>
      </div>
    </div>
    // 이거는 바꿀거 없음 InfoBox만 바꾸면 됨
  );
};

export default ChallengeCreate;
