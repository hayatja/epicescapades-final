import { Link } from 'react-router-dom';
import { useState } from 'react';
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

import '../styles/SearchBar.css';
import { useTranslation } from 'react-i18next';
import EscapadesCard from './EscapadesCard';
import { BaseColors } from './Common';

const Packages = (props) => {
  const { t } = useTranslation();
  const [loadedPackages, setLoadedPackages] = useState(
    structuredClone(props.localData)
  );
  const difficulties = ['Novice', 'Intermediate', 'Expert'];

  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [searchDest, setSearchDest] = useState('');

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const onSearch = () => {
    const tempLoadedPackages = structuredClone(props.localData);
    tempLoadedPackages.packages = tempLoadedPackages.packages.filter(
      (pkg) =>
        pkg.title.includes(searchDest) &&
        pkg.level == difficulties.indexOf(difficulty) + 1
    );
    setLoadedPackages(tempLoadedPackages);
  };

  const trending = ['forest-1'];

  return (
    <>
      <h2 className='text-center mb-4 mt-5'>Find Your Perfect Expedition!</h2>
      <h5 className='text-center mb-4'>
        Click on any package to start planning your perfect adventure instantly!
      </h5>

      <div className='recommended-articles mt-4'>
        <h4 className='text-center mb-4'>Trending Packages</h4>
        <div className='d-flex justify-content-between align-items-center'>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowLeft />
          </Button>
          <Row className='recommended-cards'>
            {[
              'Explore the Amazon',
              'Cultural Wonders',
              'Hike the Himalayas',
              'Explore the Nile',
            ].map((title, index) => (
              <Col
                key={index}
                className={`recommended-card mb-3 color-${index % 3}`}
              >
                <Card>
                  <Card.Body>{title}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant='outline-secondary' className='arrow-button'>
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <Container className='search-bar-container mt-4'>
        <Row>
          <Col md={10}>
            <InputGroup className='search-bar'>
              <Form.Control
                type='text'
                placeholder='Search Destinations'
                aria-label='Where'
                className='search-input'
                onChange={(event) => setSearchDest(event.target.value)}
              />
              <Form.Control
                as='select'
                value={difficulty}
                onChange={handleDifficultyChange}
                aria-label='Difficulty'
                className='search-input'
              >
                {difficulties.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </InputGroup>
          </Col>
          <Col md={2} className='d-flex align-items-center'>
            <Button
              variant='outline-secondary'
              className='search-button'
              onClick={() => onSearch()}
            >
              <FaSearch />
            </Button>
          </Col>
        </Row>
      </Container>

      {loadedPackages.categories.map((category, index) => {
        return (
          <Container
            key={category}
            fluid={true}
            className={
              'align-items-center no-bg ' + (index % 2 ? 'white-bg' : 'no-bg')
            }
          >
            <h4 className='text-center mb-4'>{t(category)}</h4>
            <Col className='mb-2' key={'home-col-' + category}>
              {loadedPackages.packages
                .filter((pkg) => pkg.category == category)
                .map((pkg) => {
                  return (
                    <EscapadesCard
                      key={'pkg-card' + pkg.id}
                      pkg={pkg}
                      backgroundColor={BaseColors[pkg.level % 3]}
                    />
                  );
                })}
            </Col>
          </Container>
        );
      })}
    </>
  );
};

export default Packages;
