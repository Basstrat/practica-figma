// components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar-style-1 navbar-light">
      <nav className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              Acerca de
            </Link>
          </li>
   
        </ul>
      </nav>
    </header>
  );
};

export default Header;
