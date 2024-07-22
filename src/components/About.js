import { Col, Row } from 'react-bootstrap';
// import { MapContainer, TileLayer } from 'react-leaflet';

import '../styles/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      className='d-flex justify-content-between align-items-center m-5'
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
      }}
    >
      <div>
        <h3>{t('About Us')}</h3>
        <p>{t('Although all our services are online')}</p>

        <Row>
          <Col md={7}>
            <div>
              <h4>{t('Address')}</h4>
              1234 Street St, Ottawa, Ontario, Canada
              <br />
              <iframe
                title='sample-map'
                width='100%'
                height='400'
                src='https://www.openstreetmap.org/export/embed.html?bbox=-75.9122%2C45.4215%2C-75.6122%2C45.6215&layer=mapnik'
                style={{ border: '1px solid black' }}
              ></iframe>
            </div>
          </Col>
          <Col md={5}>
            <div>
              <h3>{t('Open Hours')}</h3>
              <br />
              <p className='small-p'>
                {t('Monday')}: {t('Closed')}
              </p>
              <p className='small-p'>
                {t('Tuesday')}: {t('Closed')}
              </p>
              <p className='small-p'>{t('Wednesday')}: 11:00 am - 6:00 pm</p>
              <p className='small-p'>{t('Thursday')}: 11:00 am - 6:00 pm</p>
              <p className='small-p'>{t('Friday')}: 11:00 am - 7:00 pm</p>
              <p className='small-p'>{t('Saturday')}: 11:00 am - 7:00 pm</p>
              <p className='small-p'>
                {t('Sunday')}: {t('Closed')}
              </p>
              <br />
              <h3>Contact Us</h3>
              <br />
              <p className='small-p'>
                <b>{t('Phone')}:</b> +1 (999) 999-9999
              </p>
              <p className='small-p'>
                <b>{t('Email')}:</b> adventure@epicescapades.ca
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
