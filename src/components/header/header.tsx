import Logo from './logo';
import MainNav from './main-nav';
import Search from './search';
import LangSwitch from './lang-switcher';
import UserSection from './user-section';
import MobileMenue from './mobile-menu';

export default function Header() {
  return (
    <header className="container py-4 flex items-center justify-between">
      {/* logo in header */}
      <Logo />

      {/* search */}
      <Search />

      {/* main nav bar */}
      <MainNav />

      {/* language switcher */}
      <div className="hidden lg:block">
        <LangSwitch />
      </div>

      {/* user profile or log in */}
      <div className='hidden lg:block'>
        <UserSection />
      </div>

      <MobileMenue />
    </header>
  );
}
