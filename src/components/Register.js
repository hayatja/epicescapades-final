import React, { useState } from 'react';
import { Container, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    travelerType: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    travelerType: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return (/^([a-zA-Z]{2,}\s[a-zA-Z]{2,})$/.test(value)) ? '' : 'Please enter your full name.';
      case 'email':
        return (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) ? '' : 'Invalid email format.';
      case 'phoneNumber':
        return (/^\d{3}-\d{3}-\d{4}$/.test(value)) ? '' : 'Invalid phone number format.';
      case 'travelerType':
        return (value !== '') ? '' : 'Please select a traveler type.';
      case 'confirmPassword':
        return (formData.password === value) ? '' : 'Passwords do not match.';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Auto-format phone number
    if (name === 'phoneNumber') {
      formattedValue = value.replace(/[^\d]/g, '').substring(0, 10); // Remove non-numeric chars and limit length
      formattedValue = formattedValue.replace(/(\d{3})(\d{1,3})?(\d{1,4})?/, (match, p1, p2, p3) => {
        if (p3) return `${p1}-${p2}-${p3}`;
        return p2 ? `${p1}-${p2}` : `${p1}`;
      });
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, formattedValue) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(errors).every(x => x === '') && Object.values(formData).every(x => x !== '');
    if (isFormValid) {
      alert('Form successfully submitted!');
      console.log('Form data submitted:', formData);
      // Place for actual submit logic, e.g., making an API call
    } else {
      console.log('Errors present:', errors);
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-50 mt-5'>
      <div className='register-box'>
        <h2 className='text-center mb-4'>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formFullName'>
            <Form.Control
              type='text'
              name='fullName'
              placeholder='Full Name'
              className='mb-3'
              value={formData.fullName}
              onChange={handleChange}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type='invalid'>{errors.fullName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formEmail'>
            <Form.Label className='d-flex align-items-center'>
              Email Address*
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-email-format">Format: example@domain.com</Tooltip>}
              >
                <FaInfoCircle className='ml-2' style={{ color: errors.email ? '#dc3545' : '#6c757d', fontSize: '0.9em' }} />
              </OverlayTrigger>
            </Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Email Address'
              className='mb-3'
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formTravelerType'>
            <Form.Control
              as='select'
              name='travelerType'
              className='mb-3'
              value={formData.travelerType}
              onChange={handleChange}
              isInvalid={!!errors.travelerType}
            >
              <option value=''>Traveler Type</option>
              <option value='business'>Business</option>
              <option value='leisure'>Leisure</option>
              <option value='adventure'>Adventure</option>
            </Form.Control>
            <Form.Control.Feedback type='invalid'>{errors.travelerType}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formPassword'>
            <Form.Control
              type='password'
              name='password'
              placeholder='Unique Password'
              className='mb-3'
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId='formConfirmPassword'>
            <Form.Control
              type='password'
              name='confirmPassword'
              placeholder='Re-enter Password'
              className='mb-3'
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.confirmPassword}
            />
            <Form.Control.Feedback type='invalid'>{errors.confirmPassword}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formPhoneNumber'>
            <Form.Label className='d-flex align-items-center'>
              Phone Number*
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-phone-format">Format: 555-555-1212</Tooltip>}
              >
                <FaInfoCircle className='ml-2' style={{ color: errors.phoneNumber ? '#dc3545' : '#6c757d', fontSize: '0.9em' }} />
              </OverlayTrigger>
            </Form.Label>
            <Form.Control
              type='tel'
              name='phoneNumber'
              placeholder='Phone Number'
              className='mb-3'
              value={formData.phoneNumber}
              onChange={handleChange}
              isInvalid={!!errors.phoneNumber}
            />
            <Form.Control.Feedback type='invalid'>{errors.phoneNumber}</Form.Control.Feedback>
          </Form.Group>

          <div className='d-flex justify-content-center'>
            <Button variant='primary' type='submit' className='register-button'>
              →
            </Button>
          </div>

          <div className='text-center mt-3'>
            <Link to='/login' className='login-link'>
              login instead
            </Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
