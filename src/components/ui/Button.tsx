import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'default' | 'large';
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'white';
  children: ReactNode;
  to?: string;
}

const SIZE_MAP: { [k in ButtonProps['size']]: string } = {
  small: 'px-4 py-2 text-xs',
  default: 'px-5 py-[10px] text-sm',
  large: 'px-6 py-3 text-base',
};

const COLOR_MAP: { [k in ButtonProps['color']]: string } = {
  primary: 'text-white bg-primary hover:bg-blue-400 disabled:bg-blue-200',
  secondary:
    'text-white bg-secondary hover:bg-neutral-300 disabled:bg-neutral-600',
  success: 'text-white bg-success hover:bg-green-400 disabled:bg-green-200',
  warning: 'text-white bg-secondary hover:bg-orange-400 disabled:bg-orange-200',
  danger: 'text-white bg-secondary hover:bg-red-500 disabled:bg-red-300',
  white: 'text-neutral-700 bg-blue-50 hover:bg-blue-100 disabled:bg-slate-50',
};

export default function Button({
  size,
  color,
  children,
  to,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl ${SIZE_MAP[size]} ${COLOR_MAP[color]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
