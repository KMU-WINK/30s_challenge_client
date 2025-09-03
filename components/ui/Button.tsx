type ButtonProps = {
  label: string;
  width?: number;
  height?: number;
  variant?: 'blue' | 'gray' | 'white' | 'blueLight';
};

export function Button({
  label,
  width,
  height,
  variant = 'blue',
}: ButtonProps) {
  // 배경색
  const backgroundStyle =
    variant === 'blue'
      ? 'bg-blue-300'
      : variant === 'gray'
        ? 'bg-neutral-400'
        : variant === 'white'
          ? 'bg-white'
          : 'bg-blue-50'; // blueLight

  // 글씨 색
  const textStyle =
    variant === 'blueLight'
      ? 'text-neutral-700'
      : variant === 'white'
        ? 'text-black'
        : 'text-white';

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-['Pretendard'] text-sm font-normal leading-tight ${backgroundStyle}`}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    >
      <span className={textStyle}>{label}</span>
    </div>
  );
}
