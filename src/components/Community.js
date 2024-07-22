import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Community = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [posts, setPosts] = useState([
    {
      title: 'EpicEscapades Saved My Life! (Not Fake) (Not Clickbait)',
      description:
        'I was strolling down through the streets of Ottawa on a lazy Friday afternoon, bored, and I realized I had NO IDEA what to do!!! I was completely lost, emotionally speaking. That is when I opened EpicEscapades. Their selection of adventures were just amazing to even read and browse, and when I embarked on one myself, I discovered a passion for travel I never knew I possessed! Have the rest of you had this sort incredible life change?',
      replies: 17,
    },
    {
      title: 'the scuba dive adventure is a must !!!!',
      description:
        'Adipiscing at in tellus integer feugiat scelerisque varius. Sed faucibus turpis in eu mi. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Adipiscing elit pellentesque habitant morbi tristique senectus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Interdum velit laoreet id donec. Mollis aliquam ut porttitor leo a diam. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Massa sed elementum...',
      replies: 6,
    },
    {
      title:
        'I booked a trip in my own city through EpicEscapades and it blew my mind!!',
      description:
        'Dictum sit amet justo donec. Arcu cursus vitae congue mauris rhoncus aenean. Quis imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. In hac habitasse platea dictumst vestibulum rhoncus est. Urna et pharetra pharetra massa massa ultricies. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Sit amet nisl purus in. Tristique senectus et netus et malesuada...',
      replies: 11,
    },
  ]);

  const handleCreatePost = () => {
    if (postTitle && postDescription) {
      const newPost = {
        title: postTitle,
        description: postDescription,
        replies: 0,
      };
      setPosts([newPost, ...posts]);
      setPostTitle('');
      setPostDescription('');
    }
  };

  return (
    <Container>
      <div className='alert alert-danger mt-5' role='alert'>
        <h4 className='alert-heading'>This component was not updated for V2</h4>
        <p className='mb-0'>
          In order to maintain 5 interactive processes for this demo, the
          community page was not updated past V1.
        </p>
        <p className='mb-0'>
          Please refer to the project report for more details.
        </p>
      </div>

      <Row className='mt-4'>
        <Col>
          <Card>
            <Card.Header>Make a community post</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId='postTitle'>
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter post title'
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId='postDescription' className='mt-3'>
                  <Form.Label>Post Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='Enter post description'
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant='primary'
                  className='mt-3'
                  onClick={handleCreatePost}
                >
                  Create Post
                </Button>
                <Button
                  variant='secondary'
                  className='mt-3 ms-2'
                  onClick={() => {
                    setPostTitle('');
                    setPostDescription('');
                  }}
                >
                  Discard Post
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <h3>Latest EpicEscapades Community Posts</h3>
          {posts.map((post, index) => (
            <Card key={index} className='mt-3'>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant='link'>Reply to post</Button>
                <span className='ms-2'>{post.replies} replies</span>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Community;
