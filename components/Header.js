// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 xl:px-0 h-[65px] sm:h-[75px] xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-2 sm:py-3 xl:py-0 xl:h-[90px]">
          {/* logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.svg"
              width={180}
              height={38}
              alt="Wassim Chikhi Logo"
              priority={true}
              className="cursor-pointer w-[145px] sm:w-[175px] xl:w-[210px] h-auto"
            />
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
