import React from 'react';
import type { InputHTMLAttributes } from 'react';
import Button from '../../../components/ui/Button.tsx';

// 재사용 가능한 Input 컴포넌트
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => (
  <div className="inline-flex items-center justify-start gap-8 self-stretch">
    <label className="justify-start text-sm font-medium leading-tight text-black">
      {label}
    </label>
    <div className="inline-flex flex-1 flex-col items-start justify-start gap-2">
      <div className="inline-flex h-10 items-center justify-start gap-2 self-stretch rounded-lg bg-white px-3 outline outline-1 outline-neutral-300">
        <input
          className="w-full border-none bg-transparent text-xs font-normal leading-none text-neutral-500 focus:outline-none"
          placeholder={`${label} 입력`}
          {...rest}
        />
      </div>
    </div>
  </div>
);

const Signup: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-10 self-stretch px-8 py-5">
      {/* 제목 영역 */}
      <div className="justify-center text-lg font-medium leading-7 text-black">
        로그인에 사용할 <br />
        아이디와 이메일을 입력해주세요.
      </div>

      {/* 입력 필드 영역 */}
      <div className="flex flex-col items-start justify-start gap-7 self-stretch">
        <InputField label="아이디" type="text" />
        <InputField label="이메일" type="email" />
      </div>

      {/* '다음' 버튼 영역 */}
      <div className="self-stretch">
        <Button to="signupPW" size="default" color="primary" className="w-full">
          다음
        </Button>
      </div>
    </div>
  );
};

export default Signup;
