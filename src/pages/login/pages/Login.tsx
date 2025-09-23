import Logo from '@src/assets/Logo.png';
import LogoType from '@src/assets/LogoType.png';
import Button from '../../../components/ui/Button.tsx';

export default function LoginPage() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-10 px-14">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-start gap-4">
          <img src={Logo} alt="App Logo" className="h-24 w-24" />
          <img src={LogoType} alt="App Logo" className="w-23 h-8" />
        </div>
        <span className="text-sm font-normal text-neutral-500">
          매일매일 성취감 쌓아가기
        </span>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-3">
        <input
          id="id"
          type="id"
          required
          autoComplete="id"
          placeholder="아이디를 입력해주세요"
          className="w-full rounded-lg px-3 py-3 text-sm outline outline-1 outline-offset-[-1px] outline-neutral-300 hover:outline-primary"
        />
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="비밀번호를 입력해주세요"
          className="w-full rounded-lg px-3 py-3 text-sm outline outline-1 outline-offset-[-1px] outline-neutral-300 hover:outline-primary"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-3">
        <Button size="default" color="primary" className="w-full" type="button">
          로그인
        </Button>
        <Button
          to="/login/signup"
          size="default"
          color="white"
          className="w-full"
          type="button"
        >
          회원가입
        </Button>
      </div>
    </main>
  );
}
