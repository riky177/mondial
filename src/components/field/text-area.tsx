import clsx from 'clsx';
import React from 'react';

type TextAreaProps = {
  label?: string;
  labelClassName?: string;
  className?: string;
  containerClassName?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({
  label,
  labelClassName,
  className,
  containerClassName,
  ...props
}: TextAreaProps) => {
  return (
    <div className={clsx('flex w-full flex-col', containerClassName)}>
      <label className={clsx('mb-1 font-red-hat text-sm', labelClassName)}>
        {label}
      </label>
      <textarea
        className={clsx(
          'w-full bg-[#F4F3F0] px-4 py-2.5 font-red-hat text-sm text-tertiary placeholder:text-sm placeholder:text-tertiary focus:outline-none',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default TextArea;
