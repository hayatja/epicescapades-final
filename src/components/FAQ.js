import React from 'react';

const FAQ = () => {
  const faqStyle = {
    background: '#fff',
    borderRadius: '15px',
    padding: '80px',
    maxWidth: '1200px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const questionStyle = {
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginTop: '20px',
    paddingTop: '10px',
    borderTop: '1px solid #eee'
  };

  const answerStyle = {
    fontSize: '1em',
    marginBottom: '15px'
  };

  return (
    <div style={faqStyle} aria-labelledby="faq-heading">
      <h1 id="faq-heading" style={{ textAlign: 'center' }}>FAQ</h1>
      <dl>
        <dt style={questionStyle} id="q1">How do I book a trip?</dt>
        <dd style={answerStyle} aria-labelledby="q1">You can book a trip by selecting a package from our 'Packages' page, choosing your preferred date, and following the checkout process.</dd>

        <dt style={questionStyle} id="q2">What is your refund policy?</dt>
        <dd style={answerStyle} aria-labelledby="q2">We offer a full refund if you cancel at least 24 hours before the start date of the experience.</dd>

        <dt style={questionStyle} id="q3">Do you provide travel accommodations?</dt>
        <dd style={answerStyle} aria-labelledby="q3">No, we do not provide travel accommodations. Our services are intended to enhance your visit to a city, town, or country with specific activities and experiences.</dd>

        <dt style={questionStyle} id="q4">How can I change my booking details?</dt>
        <dd style={answerStyle} aria-labelledby="q4">You can change your booking details by accessing your profile or cart and selecting the booking you wish to modify.</dd>

        <dt style={questionStyle} id="q5">Are there any age restrictions for the experiences?</dt>
        <dd style={answerStyle} aria-labelledby="q5">Yes, all adventurers must be at least the age of 18 if not accompanied by a guardian, otherwise 16 is the minimum.</dd>

        <dt style={questionStyle} id="q6">What payment methods are accepted?</dt>
        <dd style={answerStyle} aria-labelledby="q6">We accept major credit cards, PayPal, and bank transfers for most bookings.</dd>

        <dt style={questionStyle} id="q7">Can I book an experience for a large group?</dt>
        <dd style={answerStyle} aria-labelledby="q7">Yes, we offer group bookings. Please contact us directly for more information and special rates.</dd>

        <dt style={questionStyle} id="q8">Is there customer support in case I need help?</dt>
        <dd style={answerStyle} aria-labelledby="q8">Yes, customer support is available via email, phone, and live chat to assist you with any inquiries.</dd>

        <dt style={questionStyle} id="q9">What should I do if I have a complaint?</dt>
        <dd style={answerStyle} aria-labelledby="q9">Please reach out to our customer service team directly through the contact methods provided on our site. We aim to resolve all issues as quickly as possible.</dd>
      </dl>
    </div>
  );
};

export default FAQ;
