import React from 'react';
import About from './About';
import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const SignUp = () => {
  return (
    <div>
      <About />
      <Form className='mb-3 mx-auto w-75 mt-5'>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>

      <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        <Button className='my-3' variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </div>
  )
}

export default SignUp