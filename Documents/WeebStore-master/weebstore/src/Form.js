import React from 'react';
import {Form, Button} from 'react-bootstrap';

function Forms() {
  return (
    <div className="container">
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
     </Button>
  </Form>
    </div>
  );
}

export default Forms;
