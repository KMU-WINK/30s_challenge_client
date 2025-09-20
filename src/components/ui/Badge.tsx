import React from 'react';

interface BadgeProps {
  status: '진행중' | '완료'; // 상태
}

const STATUS_STYLE: Record<BadgeProps['status'], string> = {
  진행중: 'bg-primary',
  완료: 'bg-secondary',
};

const Badge: React.FC<BadgeProps> = ({ status }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 rounded-3xl px-3 py-1 text-xs font-normal leading-none text-white ${STATUS_STYLE[status]}`}
    >
      {status}
    </div>
  );
};

export default Badge;
