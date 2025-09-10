import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center justify-start gap-4 border-b border-neutral-100 bg-white px-4 py-5">
      <button type="button" onClick={() => navigate(-1)}>
        <Icon icon="mdi:chevron-left" className="h-6 w-6"></Icon>
      </button>
      <span className="text-lg font-semibold">{children}</span>
    </div>
  );
}
