import { Icon as Iconify, type IconProps } from '@iconify/react';
import {
  CHALLENGE_ICONS,
  type ChallengeIconLabel,
} from '../../types/shared/icons.ts';

type ChallengeIconSize = 'default' | 'small';

interface ChallengeIconProps
  extends Omit<IconProps, 'icon' | 'width' | 'height' | 'color'> {
  label: ChallengeIconLabel;
  size: ChallengeIconSize;
  bgColor: string;
  iconColor: string;
}

export default function ChallengeIcon({
  label,
  size,
  bgColor,
  iconColor,
  ...rest
}: ChallengeIconProps) {
  const icon = CHALLENGE_ICONS[label];

  const sizeMap = {
    default: 40,
    small: 26,
  };

  const iconSize = sizeMap[size];

  return (
    <div
      className={`flex items-center justify-center rounded-full p-2.5 ${bgColor}`}
    >
      <Iconify
        icon={icon}
        width={iconSize}
        height={iconSize}
        className={iconColor}
        {...rest}
      />
    </div>
  );
}
