import Link from 'next/link';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Header = () => {
  return (
    <header className="py-3 flex items-center justify-around navbar sticky top-0 bg-neutral-900">
      <Link href="/">
        <a>
          <p className="text-3xl">Bloggo</p>
        </a>
      </Link>
      <NavBar />
      <SideBar />
    </header>
  );
};
export default Header;
