import React, { useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import Button from '../../../components/ui/Button.tsx';

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
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const goNext = () => {
    if (!form.username || !form.email) return;
    setStep(2);
  };

  const submit = () => {
    // TODO: 가입 API 연동
    // console.log('submit', form);
  };

  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-10 self-stretch px-8 py-5">
      <div className="justify-center text-lg font-medium leading-7 text-black">
        {step === 1 ? (
          <>
            로그인에 사용할 <br />
            아이디와 이메일을 입력해주세요.
          </>
        ) : (
          <>
            로그인에 사용할 <br />
            비밀번호를 입력해주세요.
          </>
        )}
      </div>

      <div className="flex flex-col items-start justify-start gap-7 self-stretch">
        <InputField
          label="아이디"
          id="username"
          type="text"
          value={form.username}
          onChange={onChange('username')}
        />
        <InputField
          label="이메일"
          id="email"
          type="email"
          value={form.email}
          onChange={onChange('email')}
        />
        {step === 2 && (
          <InputField
            label="비밀번호"
            id="password"
            type="password"
            value={form.password}
            onChange={onChange('password')}
          />
        )}
      </div>

      <div className="self-stretch">
        {step === 1 ? (
          <Button
            size="default"
            color="primary"
            className="w-full"
            onClick={goNext}
          >
            다음
          </Button>
        ) : (
          <Button
            size="default"
            color="primary"
            className="w-full"
            onClick={submit}
          >
            가입하기
          </Button>
        )}
      </div>
    </div>
  );
};

export default Signup;
