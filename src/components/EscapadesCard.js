import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EscapadesCard = ({ pkg, backgroundColor }) => {
  const navigate = useNavigate();
  const cardClick = () => {
    navigate('/plan', { state: pkg });
  };

  return (
    <Card
      style={{
        backgroundColor,
        color: 'white',
        borderRadius: '10px',
        margin: '0px',
        minHeight: '200px',
        cursor: 'pointer',
        // maxWidth: '200px'
      }}
      onClick={cardClick}
    >
      <Card.Body>
        <Card.Title>{pkg.title}</Card.Title>
        <Card.Text>{pkg.subtitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EscapadesCard;
