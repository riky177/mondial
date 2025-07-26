import React from 'react';

export type BreadcrumbItem = {
  label: string;
  href: string;
  isDisabled?: boolean;
  isActive?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <span key={index}>
          {item.isDisabled ? (
            <span className="font-trajan-bold text-xs text-tertiary">
              {item.label}
            </span>
          ) : (
            <a
              href={item.href}
              className={`font-trajan-bold text-xs hover:text-primary ${item.isActive ? 'text-primary' : 'text-tertiary'} uppercase`}
            >
              {item.label}
            </a>
          )}
          {index < items.length - 1 && (
            <span className="px-[6px] font-trajan-bold text-xs text-tertiary">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
