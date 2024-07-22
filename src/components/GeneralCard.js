import React from 'react';
import { Card } from 'react-bootstrap';

const GeneralCard = ({ title, subtitle, backgroundColor }) => {
  return (
    <Card
      style={{
        backgroundColor,
        color: 'white',
        borderRadius: '10px',
        margin: '0px',
        minHeight: '200px'
        // maxWidth: '200px'
      }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GeneralCard;
