import { observer } from 'mobx-react-lite';
import { Link, NavLink } from 'react-router-dom';
import { myAuthUser } from '../../store/userStore';
import { headerLinks } from '../../utils/headerLinks';

export const Header = observer(() => {

  const authUser = myAuthUser.user

  console.log(authUser);
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
          {authUser.login ? (
            <img src={authUser.photoURL!} alt='user-avatar' />
          ) : (
            <Link to='/login'>Войти</Link>
          )}
        </div>
      </header>
    </>
  );
});
