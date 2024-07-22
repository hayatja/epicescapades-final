import { NavLink } from 'react-router-dom';
import { FaUser, FaCartArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import '../styles/Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <nav className='navbar px-3'>
      <NavLink to='/'>
        <div className='logo'>
          <img src='./full_logo.png' alt='Logo' />
        </div>
      </NavLink>

      <div className='nav-links'>
        <NavLink
          to='/'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          {t('home')}
        </NavLink>
        <NavLink
          to='/about'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          {t('about us')}
        </NavLink>
        <NavLink
          to='/destinations'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          {t('destinations')}
        </NavLink>
        <NavLink
          to='/packages'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          {t('packages')}
        </NavLink>
        <NavLink
          to='/community'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          {t('community')}
        </NavLink>
        <NavLink
          to='/faq'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          {t('FAQ')}
        </NavLink>
        <div
          className='language-button ms-2 me-2'
          onClick={() => switchLanguage()}
        >
          {i18n.language === 'en' ? 'EN' : 'FR'}
        </div>
        <NavLink
          to='/login'
          className={(navData) =>
            'profile-button me-2' + (navData.isActive ? ' active-profile' : '')
          }
        >
          <FaUser />
        </NavLink>
        <NavLink
          to='/cart'
          className={(navData) =>
            'profile-button' + (navData.isActive ? ' active-profile' : '')
          }
        >
          <FaCartArrowDown />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
