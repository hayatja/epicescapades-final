import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const difficultyLevels = [
  { level: 'Novice', color: '#259384' },
  { level: 'Intermediate', color: '#2C2E4A' },
  { level: 'Advanced', color: '#4A0D2C' },
];

const Legend = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        {difficultyLevels.map((difficulty, index) => (
          <Col key={index} xs='auto' className='text-center'>
            <div
              style={{
                backgroundColor: difficulty.color,
                width: '20px',
                height: '20px',
                display: 'inline-block',
                marginRight: '5px',
              }}
            />
            <span>{difficulty.level}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Legend;
