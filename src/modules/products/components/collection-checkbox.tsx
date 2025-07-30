import React from 'react';

type CollectionCheckboxProps = {
  collection: string;
  isChecked: boolean;
  onChange: (collection: string) => void;
};

export const CollectionCheckbox: React.FC<CollectionCheckboxProps> = ({
  collection,
  isChecked,
  onChange,
}) => (
  <label className="flex cursor-pointer items-center space-x-3 py-2">
    <input
      type="checkbox"
      className="rounded border-gray-300"
      checked={isChecked}
      onChange={() => onChange(collection)}
      aria-describedby={`collection-${collection}`}
    />
    <span id={`collection-${collection}`} className="text-sm text-gray-600">
      {collection}
    </span>
  </label>
);
