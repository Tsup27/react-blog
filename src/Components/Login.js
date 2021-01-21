import React from "react";
import { Form, Button } from "react-bootstrap";

export const Login = () => {
  return (
    <div className="container-fluid login-form">
      <div className="login-data">
        {/* <form action="" method="post">
                <div><label htmlFor="email">Email</label> <input type="email" id="email"/> </div>
                <div><label htmlFor="password">Password</label> <input type="password" id="password"/> </div>
            </form> */}
        <Form>
          <Form.Group controlId="formBasicEmail">
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

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
