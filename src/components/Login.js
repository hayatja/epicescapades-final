import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate email format and set error message
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(newEmail)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (emailError || !email) {
      alert('Please fix the errors before submitting.');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center min-vh-50 mt-5'>
        <div className='login-box'>
          <h2 className='text-center mb-4'>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
                className='mb-3'
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type='invalid'>
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                className='mb-3'
              />
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <Button variant='primary' type='submit' className='login-button'>
                →
              </Button>
            </div>

            <div className='text-center mt-3'>
              <Link to='/register' className='register-link'>
                Register now!
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
