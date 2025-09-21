import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import ChallengeIcon, {
  type ChallengeIconLabel,
} from '../../../../components/ui/ChallengeIcon.tsx';
import Button from '../../../../components/ui/Button.tsx';

const OPTIONS: ChallengeIconLabel[] = [
  'run',
  'bed',
  'coding',
  'study',
  'exercise',
];

type Props = {
  value?: ChallengeIconLabel | null;
  onChange: (v: ChallengeIconLabel | null) => void;
};

export default function ChallengeIconPicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={ref}
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2.5 rounded-full bg-secondary-background p-5"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="relative flex h-6 w-6 items-center justify-center">
          {value ? (
            <ChallengeIcon
              label={value}
              size="default"
              bgColor="bg-primary-background"
              iconColor="text-primary"
            />
          ) : (
            <Icon
              icon="heroicons-outline:plus"
              className="h-6 w-6 text-neutral-500"
            />
          )}
        </div>
      </button>

      {/* 모달 */}
      {open && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" />
          <div
            ref={ref}
            className="relative z-10 flex w-80 flex-col gap-8 rounded-lg bg-white px-6 py-7"
          >
            <div className="flex flex-col justify-start">
              <span className="text-base font-semibold text-neutral-700">
                아이콘 선택
              </span>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-6">
              {OPTIONS.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    onChange(label);
                  }}
                  className="flex items-center justify-center rounded-full ring-primary-background ring-offset-2 transition-colors hover:ring-2"
                >
                  <ChallengeIcon
                    label={label}
                    size="default"
                    bgColor={`${value === label ? 'bg-secondary-background' : 'bg-primary-background'}`}
                    iconColor={`${value === label ? 'text-primary' : 'text-secondary'}`}
                  />
                </button>
              ))}
            </div>
            <div className="flex w-full gap-2.5">
              <Button
                onClick={() => {
                  onChange(null);
                  setOpen(false);
                }}
                size="default"
                color="white"
                className="w-full"
              >
                취소
              </Button>
              <Button
                onClick={() => setOpen(false)}
                size="default"
                color="primary"
                className="w-full"
              >
                선택
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
