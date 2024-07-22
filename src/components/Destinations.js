import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  InputGroup,
  Card,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Destinations.css';

const Destinations = (props) => {
  const { t } = useTranslation();
  const allDestinations = props.localData.articles;

  const [query, setQuery] = useState('');
  const [shownDestinations, setShownDestinations] = useState(allDestinations);

  useEffect(() => {
    setShownDestinations(
      allDestinations.filter((d) =>
        t(d.title).toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  return (
    <Container>
      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>
          {t('Articles recommended for you!')}
        </h4>
        <div className='d-flex justify-content-between align-items-center'>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowLeft />
          </Button>
          <Row className='recommended-cards'>
            {allDestinations
              .slice(0, 3)
              .map((d) => d.title)
              .map((title, index) => (
                <Col
                  key={index}
                  className={`recommended-card mb-3 color-${index % 3}`}
                >
                  <Card>
                    <Card.Body>{t(title)}</Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className='search-bar mt-5'>
        <InputGroup>
          <Form.Control
            type='text'
            placeholder={t('Search by titles') + '...'}
            aria-label='Search'
            onChange={(event) => setQuery(event.target.value)}
          />
          <InputGroup.Text style={{ background: 'white' }}>
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </div>

      <div className='articles mt-4'>
        {shownDestinations.slice(0, 5).map((dest) => {
          // <ObjectRow obj={dest} key={i} />;
          return (
            <Card key={dest.id} className='article-card mb-3'>
              <Card.Body>
                <Card.Title>{t(dest.title)}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {t('author') +
                    ': ' +
                    dest.author +
                    ' ' +
                    t('of') +
                    ' EpicEscapades'}
                </Card.Subtitle>
                <Card.Text>{dest.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Destinations;
