import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV = [
  {
    key: 'home' as const,
    label: '홈',
    icon: 'material-symbols:home-outline-rounded',
    path: '/',
  },
  {
    key: 'checking' as const,
    label: '출석체크',
    icon: 'mdi:table-check',
    path: '/checking',
  },
  {
    key: 'ranking' as const,
    label: '랭킹보드',
    icon: 'hugeicons:ranking',
    path: '/ranking',
  },
  {
    key: 'my' as const,
    label: 'MY',
    icon: 'iconamoon:profile-fill',
    path: '/my',
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="sticky bottom-0 flex w-full justify-center border-t border-neutral-100 bg-white px-4 py-3">
      {NAV.map((item) => {
        const isActive =
          item.path === '/'
            ? currentPath === '/'
            : currentPath.startsWith(item.path);

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => navigate(item.path)}
            className={`flex flex-1 flex-col items-center transition-colors ${
              isActive ? 'text-primary' : 'text-secondary hover:text-primary'
            }`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
          >
            <Icon icon={item.icon} className="h-6 w-6" />
            <span className="text-xs leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
