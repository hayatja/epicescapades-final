import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EscapadesCard from './EscapadesCard';
import { BaseColors } from './Common';

import '../styles/Home.css';
import GeneralCard from './GeneralCard';

const Home = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='home-container'>
        <Container fluid={true}>
          {/* Information */}
          <div className='alert alert-warning' role='alert'>
            <h4 className='alert-heading'>
              EpicEscapades V2: {t('demo information')}
            </h4>
            <ul>
              <li>{t('there is no real login')}</li>
              <li>{t('the cart is updatable')}</li>
            </ul>
          </div>

          {/* Title Area */}
          <Row className='align-items-center no-bg'>
            <Col md={6}>
              <h1>{t('take your adventures to the next level')}</h1>
              <div className='subtext-container text-center'>
                {t('explore breathtaking destinations')}
              </div>
            </Col>
            <Col md={6} className='text-center'>
              <img
                src='res/mountain.png'
                alt='Mountain'
                className='img-fluid'
              />
              <Link to='/packages'>
                <Button className='adventure-button'>
                  {t('start a new adventure')}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>

        {/* Home Sections */}
        {props.localData.homeFeatured.map((feat, index) => {
          return (
            <Container
              key={feat.id}
              fluid={true}
              className={
                'align-items-center no-bg ' + (index % 2 ? 'white-bg' : 'no-bg')
              }
            >
              <br />
              <h2>{t(feat.id)}</h2>
              <Row key={'home-section-row' + feat.id}>
                {feat.packages.map((pkgId) => {
                  if (!feat.isRatings) {
                    const pkgDetails = props.localData.packages.find(
                      (x) => x.id === pkgId
                    );
                    return (
                      <Col key={'home-col' + feat.id + '-' + pkgId}>
                        <EscapadesCard
                          key={'home-card' + feat.id + '-' + pkgId}
                          pkg={pkgDetails}
                          backgroundColor={
                            BaseColors[(pkgDetails.level - 1) % 3]
                          }
                        />
                      </Col>
                    );
                  } else {
                    const pkgArr = props.localData.packages.filter(
                      (x) => x.category === pkgId
                    );
                    let sum = 0;
                    pkgArr.forEach((item) => {
                      sum += item.review;
                    });
                    const averageRating = Math.ceil(sum / pkgArr.length);
                    return (
                      <Col key={'home-col' + feat.id + '-' + pkgId}>
                        <GeneralCard
                          key={'home-card' + feat.id + '-' + pkgId}
                          title={t(pkgId)}
                          subtitle={'⭐'.repeat(averageRating)}
                          backgroundColor='#3c8da3'
                        />
                      </Col>
                    );
                  }
                })}
              </Row>
              <br />
            </Container>
          );
        })}
      </div>
    </>
  );
};

export default Home;
