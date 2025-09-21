import { useRef } from 'react';
import Button from '../../../components/ui/Button.tsx';

type ChallengeJoinModalProps = {
  onClose: () => void;
};

export default function ChallengeJoinModal({
  onClose,
}: ChallengeJoinModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" />
      <div
        ref={dialogRef}
        className="relative z-10 flex w-80 flex-col gap-6 rounded-lg bg-white px-6 py-7"
      >
        <div className="flex flex-col justify-start">
          <span className="text-xl font-semibold text-black">
            챌린지 참여하기
          </span>
          <span className="text-sm font-normal text-neutral-500">
            챌린지 고유 코드를 입력해주세요.
          </span>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <span className="text-sm font-medium text-black">
            챌린지 고유코드
          </span>
          <input
            type="text"
            placeholder="예: 123456"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="flex w-full gap-2.5">
          <Button
            onClick={onClose}
            size="default"
            color="white"
            className="w-full"
          >
            닫기
          </Button>
          <Button
            onClick={onClose}
            size="default"
            color="primary"
            className="w-full"
          >
            참여하기
          </Button>
        </div>
      </div>
    </div>
  );
}
