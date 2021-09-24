import Card from "./card";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Services = () => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-between bg-cardBlack  group hover:bg-secondary hover:ease-in transition-all duration-500 rounded-lg transform hover:scale-y-105 '>
        <div className=' mb-5 w-full ml-6 mr-6  text-center cursor-pointer'>
          <h2 className='inline-block py-8 text-2xl font-semibold'>
            Web Developments
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            praesentium quam nostrum mollitia nemo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
