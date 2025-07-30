import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

type ExpandableSectionProps = {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  isExpanded,
  onToggle,
  children,
}) => (
  <div>
    <button
      type="button"
      className="flex w-full items-center justify-between gap-3 py-4 font-medium text-gray-900 hover:text-gray-700"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={`section-${title.toLowerCase()}`}
    >
      <span className="text-sm">{title}</span>
      <BiChevronDown
        className={`${isExpanded ? 'rotate-180' : ''} transition-transform duration-200`}
        size={20}
      />
    </button>
    {isExpanded && (
      <div id={`section-${title.toLowerCase()}`} className="pb-4">
        {children}
      </div>
    )}
  </div>
);
