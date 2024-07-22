import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='custom-footer'>
      <div className='footer-content'>
        <div>
          <img src='./full_logo.png' alt='Logo' />
          <p>{t('FIND YOUR PERFECT ADVENTURE')}</p>
          <p>© {t('Copyright')} 2024</p>
        </div>
        <div>
          <p>1234 Street St, Ottawa, Ontario, Canada</p>
          <br />
          <p>+1 (999) 999-9999</p>
          <p>adventure@epicescapades.ca</p>
        </div>
        <div className='text-end'>
          <Link to='/about' className='foot-links'>
            <p>{t('Contact Us')}</p>
          </Link>
          <p>{t('Terms and Conditions')}</p>
          <p>{t('Privacy Policy')}</p>
          <Link to='/faq' className='foot-links'>
            <p>{t('FAQ')}</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
