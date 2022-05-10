import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';
import { navItems } from './nav-items';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };
  return (
    <div className="block sm:hidden">
      <FaBars size="2rem" onClick={toggleMenu} />
      {isOpen && (
        <>
          <MdClose
            size="3rem"
            onClick={toggleMenu}
            className="absolute top-2 right-2 close-btn"
          />
          <nav className="absolute z-10 left-0 top-0 w-full h-full text-3xl bg-neutral-800">
            <ul className=" mt-16 flex flex-col justify-start items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="hover:underline" onClick={toggleMenu}>
                    {item.name}
                  </a>
                </Link>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};
export default SideBar;
