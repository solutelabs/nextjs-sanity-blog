import Link from 'next/link';
import { navItems } from './nav-items';

const NavBar = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="space-x-8">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="hover:underline">{item.name}</a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
