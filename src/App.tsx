import { Button } from '../components/ui/Button';

export default function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Button label="시작하기" width={233} height={40} variant="blue" />
      <Button label="로그인" width={273} height={40} variant="blue" />
      <Button label="회원가입" width={273} height={40} variant="white" />
      <Button label="다음" width={329} height={40} variant="gray" />
      <Button label="참여하기" width={160.5} height={40} variant="blueLight" />
      <Button label="개설하기" width={160.5} height={40} variant="blue" />
      <Button label="닫기" width={130} height={40} variant="blueLight" />
      <Button label="참여하기" width={130} height={40} variant="blue" />
    </div>
  );
}
