import React, { useState } from 'react';
import OnboardingStep from './components/OnboardingStep';
import CheckIcon from './components/CheckIcon';
import CalendarIcon from './components/CalendarIcon';
import TrophyIcon from './components/TrophyIcon';

const onboardingData = [
  {
    title: `작심삼일, 이제 그만\n우리가 도와줄게요 :)`,
    description: '한달 동안 꾸준히 기록해보아요.\n하루 한 번의 기록이 당신을 바꿔요!',
  },
  {
    title: `챌린지를 개설하고\n함께할 수 있어요`,
    icon: <CheckIcon />,
  },
  {
    title: `날짜별로 완료하고\n사진으로 인증해요`,
    icon: <CalendarIcon />,
  },
  {
    title: `나의 실천을\n랭킹으로 확인해요`,
    icon: <TrophyIcon />,
  },
];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = onboardingData.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // TODO: 마지막 페이지입니다. '시작하기' 버튼을 누르면
      // 메인 페이지로 이동하는 로직을 여기에 추가하세요.
      alert('온보딩 완료! 메인 페이지로 이동합니다.');
    }
  };

  const stepData = onboardingData[currentStep];

  return (
    <div className="max-w-sm mx-auto h-screen border">
      <OnboardingStep
        title={stepData.title}
        description={stepData.description}
        icon={stepData.icon}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onNext={handleNext}
      />
    </div>
  );
};

export default OnboardingPage;