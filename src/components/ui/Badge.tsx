interface BadgeProps {
  status: '진행중' | '완료'; // 상태
}

const STATUS_STYLE: Record<BadgeProps['status'], string> = {
  진행중: 'bg-primary',
  완료: 'bg-secondary',
};

export default function Badge({ status }: BadgeProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-3xl px-3 py-1 text-xs font-normal text-white ${STATUS_STYLE[status]}`}
    >
      {status}
    </div>
  );
}
