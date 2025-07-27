import React from 'react';

import SideProfile from '@/components/side-profile';

const Profile = () => {
  return (
    <div className="px-4 py-9">
      <h2 className="mb-1.5 w-full border-b-[1px] border-solid border-black pb-2.5 font-trajan-bold text-lg">
        ACCOUNT
      </h2>
      <SideProfile isMobile />
    </div>
  );
};

export default Profile;
