import { useRef, useState } from 'react';
import Button from '../../../../components/ui/Button.tsx';
import { Icon } from '@iconify/react';

type ChallengeJoinModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
};

export default function ImageUploadModal({
  isOpen,
  onClose,
  onConfirm,
}: ChallengeJoinModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const openFileDialog = () => fileInputRef.current?.click();

  const viewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="upload-title"
        className="relative z-10 flex w-80 flex-col gap-6 rounded-lg bg-white px-6 py-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <span id="upload-title" className="text-xl font-semibold text-black">
            사진 업로드
          </span>
          <span className="text-sm font-normal text-neutral-500">
            사진을 업로드해서 챌린지를 인증하세요.
          </span>
        </div>

        {!imageUrl ? (
          <div
            className="flex cursor-pointer flex-col items-center gap-y-2 rounded-lg border-[2px] border-dashed border-gray-300 py-8"
            onClick={openFileDialog}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <Icon icon="bi:image-fill" className="h-6 w-6 text-gray-400" />
            </div>
            <span className="text-sm font-medium">사진을 올려주세요</span>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={viewImage}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-y-2 rounded-lg border-[3px] border-dashed border-green-500 bg-green-50 py-8">
            <img
              src={imageUrl}
              alt="사진이 선택 되었습니다"
              className="h-[120px] w-[120px] rounded-lg object-cover"
            />
            <span className="text-sm font-medium text-green-600">
              사진이 선택 되었습니다
            </span>
          </div>
        )}

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
            onClick={() => {
              onConfirm?.();
              onClose();
            }}
            size="default"
            color="primary"
            className="w-full"
          >
            인증하기
          </Button>
        </div>
      </div>
    </div>
  );
}
