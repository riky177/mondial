import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type BreadcrumbItem = {
  label: string;
  href: string;
  isDisabled?: boolean;
  isActive?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  return (
    <div className={clsx('flex', className)}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.isDisabled ? (
            <span className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap font-trajan-bold text-xs text-tertiary">
              {item.label}
            </span>
          ) : (
            <div className="elipsis-one-line max-w-[300px]">
              <Link
                href={item.href}
                className={`font-trajan-bold text-xs uppercase hover:text-primary ${item.isActive ? 'text-primary' : 'text-tertiary'} `}
              >
                {item.label}
              </Link>
            </div>
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
