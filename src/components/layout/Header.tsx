
import { NavLink } from 'react-router-dom';
import { headerLinks } from '../../utils/headerLinks';

interface Props {}

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__image'>
          <img src='./images/logo.png' alt='' />
        </div>
        <div className='header__menu'>
          {headerLinks.map((e) => (
            <NavLink
              key={new Date().toDateString()}
              to={e.link}
              activeClassName='header__menu_selected'
            >
              {e.name}
            </NavLink>
          ))}
        </div>
        <div className='header__profile'>
          <img src='./images/profile.png' alt='' />
        </div>
      </header>
    </>
  );
};
