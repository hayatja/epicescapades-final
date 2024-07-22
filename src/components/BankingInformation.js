import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BankingInformation = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardholderName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardholderName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const navigate = useNavigate();

  // case switch easier to read than if
  const validateField = (name, value) => {
    switch (name) {
      case 'cardNumber':
        return (/^\d{4} \d{4} \d{4} \d{4}$/.test(value)) ? '' : 'Card number must be 16 digits.';
      case 'expiryMonth':
        return value ? '' : 'Expiry month is required.';
      case 'expiryYear':
        return value ? '' : 'Expiry year is required.';
      case 'cvv':
        return (/^\d{3}$/.test(value)) ? '' : 'CVV must be 3 digits.';
      case 'cardholderName':
        return (/^(?=.*\b\w{2,}\b\s\b\w{2,}\b).+$/.test(value)) ? '' : 'Cardholder name must contain only letters and spaces.';
      case 'address':
        return value.trim() !== '' ? '' : 'Address is required.';
      case 'city':
        return (/^[a-zA-Z\s]+$/.test(value)) ? '' : 'City must contain only letters and spaces.';
      case 'state':
        return (/^[a-zA-Z\s]+$/.test(value)) ? '' : 'State or province must contain only letters and spaces.';
      case 'zip':
        return (/^\d{5}$|^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(value)) ? '' : 'Invalid postal or zip code';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
      setErrors(prev => ({ ...prev, [name]: validateField(name, formattedValue) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { ...errors };
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);
    const isFormValid = Object.values(newErrors).every(x => x === '');
    if (isFormValid) {
      alert('Payment information submitted successfully!');
      navigate('/booking-confirmation');
    } else {
      console.log('Errors present:', newErrors);
    }
  };

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i <= 16; i++) {
      years.push(currentYear + i);
    }
    return years;
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-11

  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='banking-info-box' style={{ backgroundColor: 'white', borderRadius: '25px', padding: '40px', width: '100%', maxWidth: '1200px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 className='text-center mb-4'>Banking Information</h1>
        <p className='text-center mb-4'>Please provide your banking details to complete the transaction.</p>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId='formCardNumber'>
                <Form.Label>
                  Card Number*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Format: 1111 1111 1111 1111')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.cardNumber ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='cardNumber'
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder='Enter your card number'
                  aria-required="true"
                  aria-invalid={!!errors.cardNumber}
                  isInvalid={!!errors.cardNumber}
                />
                <Form.Control.Feedback type='invalid'>{errors.cardNumber}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formExpiryDate' className='mt-3'>
                <Form.Label>
                  Expiry Date (MM/YY)*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Select expiry month and year')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: (errors.expiryMonth || errors.expiryYear) ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Control
                      as="select"
                      name="expiryMonth"
                      value={formData.expiryMonth}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.expiryMonth}
                      isInvalid={!!errors.expiryMonth}
                    >
                      <option value="">Month</option>
                      {months.map((month, index) => (
                        <option key={index + 1} value={month} disabled={formData.expiryYear === String(currentYear) && index < currentMonth - 1}>
                          {month}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors.expiryMonth}</Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      as="select"
                      name="expiryYear"
                      value={formData.expiryYear}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.expiryYear}
                      isInvalid={!!errors.expiryYear}
                    >
                      <option value="">Year</option>
                      {getYears().map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>{errors.expiryYear}</Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId='formCVV' className='mt-3'>
                <Form.Label>
                  CVV*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Format: ### (on the back of your card)')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.cvv ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='cvv'
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder='CVV'
                  aria-required="true"
                  aria-invalid={!!errors.cvv}
                  isInvalid={!!errors.cvv}
                />
                <Form.Control.Feedback type='invalid'>{errors.cvv}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formCardholderName' className='mt-3'>
                <Form.Label>
                  Cardholder Name*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Enter the name as it appears on your card')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.cardholderName ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='cardholderName'
                  value={formData.cardholderName}
                  onChange={handleChange}
                  placeholder='Enter cardholder name'
                  aria-required="true"
                  aria-invalid={!!errors.cardholderName}
                  isInvalid={!!errors.cardholderName}
                />
                <Form.Control.Feedback type='invalid'>{errors.cardholderName}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId='formAddress' className='mt-3'>
                <Form.Label>
                  Address*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Enter your billing address')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.address ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='Enter your address'
                  aria-required="true"
                  aria-invalid={!!errors.address}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type='invalid'>{errors.address}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formCity' className='mt-3'>
                <Form.Label>
                  City*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Enter your city')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.city ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                  placeholder='Enter your city'
                  aria-required="true"
                  aria-invalid={!!errors.city}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type='invalid'>{errors.city}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formState' className='mt-3'>
                <Form.Label>
                  Province / State*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Enter your state')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.state ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='state'
                  value={formData.state}
                  onChange={handleChange}
                  placeholder='Enter your province or state'
                  aria-required="true"
                  aria-invalid={!!errors.state}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type='invalid'>{errors.state}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formZip' className='mt-3'>
                <Form.Label>
                  Postal Code / Zip Code*
                  <OverlayTrigger
                    placement="right"
                    overlay={renderTooltip('Format: zip code, 12345 OR postal code, A1A 1A1 ')}
                  >
                    <Button variant="link" className='p-0 m-0 info-button'>
                      <FaInfoCircle className='info-icon small' style={{ color: errors.zip ? '#dc3545' : '#6c757d' }} />
                    </Button>
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control
                  type='text'
                  name='zip'
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder='Enter your postal or zip code'
                  aria-required="true"
                  aria-invalid={!!errors.zip}
                  isInvalid={!!errors.zip}
                />
                <Form.Control.Feedback type='invalid'>{errors.zip}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className='d-flex justify-content-center mt-4'>
            <Button variant='light' className='mr-3' style={{ marginRight: '15px' }} href="/plan">
              Return to Plan
            </Button>
            <Button variant='success' type='submit'>
              Confirm & Pay
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default BankingInformation;
