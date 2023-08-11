import React from 'react';
import { HomeIcon } from "@heroicons/react/24/outline";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";




import { EnvelopeIcon } from "@heroicons/react/24/outline";

const SideBarMenu = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <HomeIcon className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500" />
        <SquaresPlusIcon className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500" />

        <EnvelopeIcon className="h-12 w-12 text-white borderThin p-1 hover:text-gray-500" />
      </div>
    </div>
  );
};

export default SideBarMenu;