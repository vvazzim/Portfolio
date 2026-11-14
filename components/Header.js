// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-8 sm:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 xl:py-0 xl:h-[90px]">
          {/* logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.svg"
              width={210}
              height={44}
              alt="Wassim Chikhi Logo"
              priority={true}
              className="cursor-pointer"
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
