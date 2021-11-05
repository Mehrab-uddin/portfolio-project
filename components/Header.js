import Link from "next/link";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  UserIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

import HeaderItems from "./headerItems";

const Header = () => {
  return (
    <header className=' flex flex-col fixed inset-x-0 z-10 bg-gray-900 sm:flex-row p-1 justify-between items-center max-h-28 font-Poppins text-gray-200'>
      <h1 className='text-2xl lg:ml-10 font-bold uppercase'>Mehrab Uddin</h1>
      <div className='flex flex-grow justify-evenly max-w-2xl mt-3'>
        <Link href='/'>
          <a>
            <HeaderItems title='HOME' Icon={HomeIcon} />
          </a>
        </Link>
        <Link href='#about'>
          <a>
            <HeaderItems title='ABOUT' Icon={QuestionMarkCircleIcon} />{" "}
          </a>
        </Link>
        <Link href='#services'>
          <a>
            <HeaderItems title='SERVICES' Icon={BadgeCheckIcon} />
          </a>
        </Link>
        <Link href='#portfolio'>
          <a>
            <HeaderItems title='PORTFOLIO' Icon={CollectionIcon} />
          </a>
        </Link>
        <Link href='#contact'>
          <a>
            <HeaderItems title='CONTACT' Icon={UserIcon} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
