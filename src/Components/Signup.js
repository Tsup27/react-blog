import React from "react";
import { Form, Button } from "react-bootstrap";

export const Signup = () => {
  return (
    <div>
      <div className="container-fluid login-form">
        <div className="login-data">
          {/* <form action="" method="post">
                <div><label htmlFor="email">Email</label> <input type="email" id="email"/> </div>
                <div><label htmlFor="password">Password</label> <input type="password" id="password"/> </div>
            </form> */}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />

              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Label>Type of User </Form.Label>
            <Form.Control as="select" size="md">
              <option>Signup as Reader</option>
              <option>Signup as Blogger</option>
            </Form.Control>
            <Button variant="primary" type="submit" className="signup-btn">
              Signup
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
