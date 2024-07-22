import { Button, Container } from 'react-bootstrap';
import BookingForm from './BookingForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Plan = ({ cart }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { state } = location;

  if (!state) {
    return (
      <>
        <Container className='alert alert-danger mt-5 text-center'>
          <p>
            Cannot fetch planning details, please try navigating to this page
            again.
          </p>
          Please not that you cannot visit this page directly, but only by
          clicking a package!
        </Container>
      </>
    );
  }

  const description =
    state.description || '[No Description provided for this package]';

  const addToCart = () => {
    cart.saved.push(state.id);
    alert('Added to cart!');
    navigate('/packages');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          className='mt-5 mb-2'
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <p>Destination:</p>
          <h4>{state.title}</h4>
          <h6>{state.subtitle}</h6>
        </Container>

        <Container
          className='mt-3 mb-2'
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <p>Description:</p>
          <h4>{description}</h4>
        </Container>

        <Container
          className='mt-3 mb-2'
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <p>{t('Rating')}:</p>
          <h4>{'⭐'.repeat(state.review)}</h4>
        </Container>

        <Button
          style={{
            marginTop: '30px',
            marginBottom: '20px',
            border: '2px dotted',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            color: 'inherit',
            padding: '10px 20px',
          }}
          onClick={() => addToCart()}
        >
          Add To Cart
        </Button>

        <p>Or continue below to book now!</p>

        <BookingForm />
      </div>
    </>
  );
};

export default Plan;
