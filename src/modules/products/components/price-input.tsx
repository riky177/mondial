import React from 'react';

type PriceInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export const PriceInput: React.FC<PriceInputProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 font-trajan-bold text-xxs text-tertiary"
    >
      {label}
    </label>
    <div className="flex w-full border-b border-gray-300 py-1">
      <span className="font-sm mr-2">Rp</span>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        className="w-full text-sm outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min="0"
      />
    </div>
  </div>
);
