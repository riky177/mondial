import clsx from 'clsx';
import React from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';

type InputDateProps = {
  label?: string;
  labelClassName?: string;
  className?: string;
  containerClassName?: string;
} & DatePickerProps;

const InputDate = ({
  label,
  labelClassName,
  className,
  containerClassName,
  ...props
}: InputDateProps) => {
  return (
    <div className={clsx('flex w-full flex-col', containerClassName)}>
      <label className={clsx('mb-1 font-red-hat text-sm', labelClassName)}>
        {label}
      </label>
      <DatePicker
        className={clsx(
          'w-full bg-[#F4F3F0] px-4 py-2.5 text-sm text-tertiary placeholder:text-sm focus:outline-none',
          className,
        )}
        dateFormat="yyyy-MM-dd"
        {...props}
      />
    </div>
  );
};

export default InputDate;
