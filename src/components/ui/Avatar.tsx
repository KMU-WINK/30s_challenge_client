import React from 'react';
import { Icon } from '@iconify/react';

interface AvatarProps {
  name: string;
  size: 'small' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ name, size }) => {
  const SIZE_STYLES = {
    small: {
      container: 'gap-3',
      Circle: 'w-11 h-11',
      nameText: 'text-base font-medium leading-normal',
      iconSize: 'w-5 h-5', // Adjusted size for the icon component
    },
    large: {
      container: 'gap-5',
      Circle: 'w-14 h-14',
      nameText: 'text-xl font-semibold leading-7',
      iconSize: 'w-7 h-7', // Adjusted size for the icon component
    },
  };

  const styles = SIZE_STYLES[size];

  return (
    <div
      className={`inline-flex items-center justify-start ${styles.container}`}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-zinc-100 p-2.5 ${styles.Circle}`}
      >
        <Icon
          icon="heroicons-outline:user"
          className={`text-neutral-500 ${styles.iconSize}`}
        />
      </div>

      <div className={`text-black ${styles.nameText}`}>{name}</div>
    </div>
  );
};

export default Avatar;
