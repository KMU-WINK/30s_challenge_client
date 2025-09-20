import React from 'react';

interface OnboardingStepProps {
  title: React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  icon,
  currentStep,
  totalSteps,
  onNext,
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-white p-8">
      <div className="flex-grow"></div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold mb-4 whitespace-pre-line">
          {title}
        </h1>
        {description && <p className="text-[#737373] mb-8 whitespace-pre-line">{description}</p>}
        {icon && <div className="mb-8">{icon}</div>}
      </div>
      
      <div className="flex-grow flex flex-col justify-end items-center">
        <div className="flex gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          className="w-full self-stretch flex justify-center items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#BEDBFF] text-white font-bold"
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep;