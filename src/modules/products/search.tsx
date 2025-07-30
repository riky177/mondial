'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import ProductWithFilter from '@/components/product-with-filter';

const DATA = [
  {
    id: 1,
    name: 'Candis Stud Earrings',
    type: '18k WHITE GOLD',
    image:
      'https://media-order.cmkclub.com/thumb/variant_photos/2023/2/14/jpky4VyiAEX5oyPUMesS6S_size_480.png',
  },
  {
    id: 2,
    name: 'Cataleya Earrings',
    type: '18k ROSE GOLD',
    image:
      'https://media-order.cmkclub.com/thumb/variant_photos/2023/2/14/5GNLtbiuLP24wAfKBr4q8e_size_480.png',
  },
  {
    id: 3,
    name: 'Azure Pear Earrings',
    type: '18k WHITE GOLD',
    image:
      'https://media-order.cmkclub.com/thumb/variant_photos/2023/2/14/oU7iBGGEpJAtj77MQqxxRA_size_480.png',
  },
  {
    id: 4,
    name: 'Azure Pear Inverse Earrings',
    type: '18k WHITE GOLD',
    image:
      'https://media-order.cmkclub.com/thumb/variant_photos/2023/2/14/H744kJgFHdAqqU4Qcc7LeC_size_480.png',
  },
];

const Search = () => {
  const search = useSearchParams();
  const query = search.get('query');
  return (
    <div className="container pt-10">
      <ProductWithFilter>
        <div className="px-4">
          <p className="mb-7 font-red-hat font-light md:text-xl">
            We found <strong>{DATA.length}</strong> result for{' '}
            <strong>&quot;{query}&quot;</strong>
          </p>
          {/* <div className="flex items-center pt-4">
        <FoundDiamond />
        <div className="ml-4">
          <p className="text-lg text-tertiary md:text-3xl">Product not found</p>
          <p className="font-red-hat text-sm text-tertiary md:text-base">
            Sorry, no matches were found for your search “{query}”
          </p>
        </div>
      </div> */}
          <div className="flex flex-wrap gap-2">
            {DATA.map((item) => (
              <Link
                href={`/products/earings/${item.id}`}
                key={item.id}
                className="group flex w-full max-w-[170px] cursor-pointer flex-col items-center justify-center space-y-2 p-3 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-[1px] hover:border-gray-200 md:max-w-[258px]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={184}
                  height={184}
                  className="hidden md:block"
                />
                <Image
                  src={item.image}
                  alt={item.name}
                  width={117}
                  height={117}
                  className="block md:hidden"
                />
                <p className="text-center font-trajan-bold text-sm">
                  {item.name}
                </p>
                <p className="text-center font-red-hat text-sm text-primary group-hover:hidden">
                  {item.type}
                </p>
                <div className="hidden py-4 group-hover:block">
                  <button className="mt-6 rounded-3xl bg-black px-7 py-2 font-red-hat text-sm text-white">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ProductWithFilter>
    </div>
  );
};

export default Search;
