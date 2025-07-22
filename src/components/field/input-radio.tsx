import clsx from 'clsx';
import React from 'react';

type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type InputRadioProps = {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  radioClassName?: string;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
};

const InputRadio = ({
  name,
  options,
  value,
  onChange,
  label,
  labelClassName,
  containerClassName,
  radioClassName,
  orientation = 'vertical',
  disabled = false,
}: InputRadioProps) => {
  const handleChange = (selectedValue: string) => {
    if (!disabled && onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className={clsx('flex w-full flex-col', containerClassName)}>
      {label && (
        <label className={clsx('mb-2 font-red-hat text-sm', labelClassName)}>
          {label}
        </label>
      )}
      <div
        className={clsx(
          'flex gap-4',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              'flex cursor-pointer items-center gap-2 font-red-hat text-sm',
              (disabled || option.disabled) && 'cursor-not-allowed opacity-50',
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled || option.disabled}
              className={clsx(
                'h-4 w-4 border-2 border-tertiary text-tertiary focus:ring-2 focus:ring-tertiary focus:ring-offset-0',
                radioClassName,
              )}
            />
            <span className="select-none text-tertiary">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InputRadio;
