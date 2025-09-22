// src/components/common/FormField.tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2 self-stretch">
      {/* 라벨 */}
      <div className="text-sm font-medium leading-tight text-black">
        {label}
      </div>

      {/* 입력 박스 */}
      <div className="flex h-10 items-center gap-2 rounded-lg bg-white px-3 outline outline-1 outline-offset-[-1px] outline-neutral-300 transition-colors hover:outline-primary">
        {children ? (
          children
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="h-full w-full text-sm text-black outline-none placeholder:text-neutral-400"
          />
        )}
      </div>
    </div>
  );
};

export default FormField;
