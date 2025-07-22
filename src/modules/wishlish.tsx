import React from 'react';

import SideProfile from '@/components/side-profile';

const Wishlist = () => {
  return (
    <div className="container flex gap-x-8 px-4 py-4 md:py-12">
      <SideProfile />
      <div className="w-full">
        <h2 className="mb-7 border-b-[1px] border-solid border-b-black pb-2.5 text-2xl font-bold">
          WISHLIST
        </h2>
        <div className="mb-11">
          <h4 className="my-3.5 font-red-hat text-[14px]">
            Your Wishlist is empty.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
