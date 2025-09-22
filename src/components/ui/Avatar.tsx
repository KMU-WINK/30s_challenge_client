import { Icon } from '@iconify/react';
import type { SimpleUserResponse } from '../../types/api/user.ts';

type AvatarSize = 'small' | 'large';

interface AvatarProps extends SimpleUserResponse {
  size: AvatarSize;
}

const SIZE_STYLES = {
  small: {
    container: 'gap-3',
    circle: 'w-11 h-11',
    nameText: 'text-base font-medium',
    iconSize: 'w-5 h-5',
    imgSize: 'w-11 h-11',
  },
  large: {
    container: 'gap-5',
    circle: 'w-14 h-14',
    nameText: 'text-xl font-semibold',
    iconSize: 'w-7 h-7',
    imgSize: 'w-14 h-14',
  },
} as const;

export default function Avatar({ id, name, size }: AvatarProps) {
  const styles = SIZE_STYLES[size];

  return (
    <div
      className={`inline-flex items-center justify-start ${styles.container}`}
      data-user-id={id}
      aria-label={name}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-zinc-100 p-2.5 ${styles.circle} overflow-hidden`}
      >
        <Icon
          icon="heroicons-outline:user"
          className={`text-neutral-500 ${styles.iconSize}`}
        />
      </div>
      <div className={`${styles.nameText}`}>{name}</div>
    </div>
  );
}
