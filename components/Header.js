import Link from 'next/link';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Header = () => {
  return (
    <header className="py-3 mb-6 flex items-center justify-around navbar">
      <Link href="/">
        <a>
          <p className="text-3xl">Blogg</p>
        </a>
      </Link>
      <NavBar />
      <SideBar />
    </header>
  );
};
export default Header;
