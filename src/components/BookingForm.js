import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import '../styles/BookingForm.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [timePeriod, setTimePeriod] = useState('AM');
  const [hour, setHour] = useState('1');
  const [minute, setMinute] = useState('00');
  const [consent, setConsent] = useState(false);
  const [nameError, setNameError] = useState('');
  const [consentError, setConsentError] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!/^\b\w{2,}\b \b\w{2,}\b$/.test(e.target.value)) {
      setNameError('Please enter your full name.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue =
      value.length > 6
        ? `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`
        : value.length > 3
        ? `${value.slice(0, 3)}-${value.slice(3, 6)}`
        : value;
    setPhone(formattedValue);
    if (!/^\d{3}-\d{3}-\d{4}$/.test(formattedValue)) {
      setPhoneError('Invalid phone number format.');
    } else {
      setPhoneError('');
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    if (!e.target.value) {
      setDateError('Missing required field');
    } else {
      setDateError('');
    }
  };

  const validateFields = () => {
    let valid = true;
    if (!name) {
      setNameError('Missing required field');
      valid = false;
    }
    if (!email) {
      setEmailError('Missing required field');
      valid = false;
    }
    if (!phone) {
      setPhoneError('Missing required field');
      valid = false;
    }
    if (!selectedDate) {
      setDateError('Missing field');
      valid = false;
    }
    if (!consent) {
      setConsentError('Consent is required');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      alert('Form submitted successfully!');
      navigate('/banking-information');
    }
  };

  useEffect(() => {
    if (consent) {
      setConsentError('');
    }
  }, [consent]);

  const renderTooltip = (message) => <Tooltip>{message}</Tooltip>;

  const [hours] = useState(
    timePeriod === 'AM' ? [6, 7, 8, 9, 10, 11] : [1, 2, 3, 4, 5, 6, 7, 8]
  );
  const [minutes] = useState([0, 15, 30, 45]);

  return (
    <Container className='mt-5 booking-container w-100'>
      <h3 className='text-center mb-5'>Create Your Own Adventure Plan!</h3>
      <Row>
        <Col md={6}>
          <h3>Client Details</h3>
          <Form>
            <Form.Group controlId='formName'>
              <Form.Label>Your Name*</Form.Label>
              <Form.Control
                type='text'
                value={name}
                onChange={handleNameChange}
                placeholder='Enter your full name'
                isInvalid={!!nameError}
              />
              <Form.Control.Feedback type='invalid'>
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formEmail' className='mt-3'>
              <Form.Label>Email Address*</Form.Label>
              <OverlayTrigger
                placement='right'
                overlay={renderTooltip('Format: example@domain.com')}
              >
                <Button variant='link' className='p-0 m-0 info-button'>
                  <FaInfoCircle
                    className='info-icon small'
                    style={{ color: emailError ? '#dc3545' : '#6c757d' }}
                  />
                </Button>
              </OverlayTrigger>
              <Form.Control
                type='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='Enter your email'
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type='invalid'>
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formPhone' className='mt-3'>
              <Form.Label>Phone Number*</Form.Label>
              <OverlayTrigger
                placement='right'
                overlay={<Tooltip>Format: 555-555-1212</Tooltip>}
              >
                <Button variant='link' className='p-0 m-0 info-button'>
                  <FaInfoCircle
                    className='info-icon small'
                    style={{ color: phoneError ? '#dc3545' : '#6c757d' }}
                  />
                </Button>
              </OverlayTrigger>
              <Form.Control
                type='text'
                value={phone}
                onChange={handlePhoneChange}
                placeholder='Enter your phone number'
                isInvalid={!!phoneError}
              />
              <Form.Control.Feedback type='invalid'>
                {phoneError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formNotes' className='mt-3'>
              <Form.Label>Additional Notes:</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Form.Group controlId='formConsent' className='mt-3'>
              <Form.Check
                type='checkbox'
                label='I consent that I am at least 18 years old or older, and all adventurers are over the age of 16 and/or accompanied by a guardian.'
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              {consentError && (
                <small className='text-danger'>{consentError}</small>
              )}
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Booking Details</h3>
          <p>Package: City Lights - Discover Vibrant Urban Escapes</p>
          <p>Difficulty: Easy</p>
          <p>Location: Lorem ipsum dolor</p>
          <p>Duration: 3 hr 30 min</p>
          <Form.Group controlId='formAdventurers' className='mt-3'>
            <Form.Label>Select # Adventurers</Form.Label>
            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='formDate' className='mt-3'>
            <Form.Label>Pick a Date</Form.Label>
            <Form.Control
              type='date'
              value={selectedDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
              isInvalid={!!dateError}
            />
            <Form.Control.Feedback type='invalid'>
              {dateError}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formTime' className='mt-3'>
            <Form.Label>Select Time</Form.Label>
            <InputGroup>
              <Form.Control
                as='select'
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              >
                {hours.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </Form.Control>
              <InputGroup.Text>:</InputGroup.Text>
              <Form.Control
                as='select'
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
              >
                {minutes.map((m) => (
                  <option key={m}>{m.toString().padStart(2, '0')}</option>
                ))}
              </Form.Control>
              <Form.Control
                as='select'
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                style={{ backgroundColor: '#f8f9fa', borderColor: '#ced4da' }}
              >
                <option>AM</option>
                <option>PM</option>
              </Form.Control>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={6}>
          <h3>Payment Details</h3>
          <p>Subtotal: CA$199</p>
          <p>Tax: CA$25.87</p>
          <hr />
          <p>Total: CA$224.87</p>
        </Col>
        <Col md={6} className='d-flex justify-content-end align-items-center'>
          <Button variant='secondary' className='me-2' onClick={handleSubmit}>
            Add to Cart
          </Button>
          <Button variant='success' onClick={handleSubmit}>
            Book Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
