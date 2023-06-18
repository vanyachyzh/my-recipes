import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { Selector } from '../Selector/Selector';
import { SearchField } from '../SearchField/SearchField';
import { HeartIcon, PlusIcon } from '../Icon/Icon';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>

      {isHomePage && (
        <>
          <Selector />
          <SearchField />
        </>
      )}

      <Link to='favorite' className='header__link'>
        <HeartIcon isActive={true} />
      </Link>

      <Link to='saved' className='header__link'>
        <PlusIcon isActive={true} />
      </Link>
    </header>
  );
};
