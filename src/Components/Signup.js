import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    // localStorage.removeItem("users");

    if (!users) {
      users = [];
    }
    users.push(formData);

    localStorage.setItem("users", JSON.stringify(users));
    console.log(localStorage.users);
    window.location = "/";
  };
  return (
    <div>
      <div className="container-fluid login-form">
        <div className="login-data">
          {/* <form action="" method="post">
                <div><label htmlFor="email">Email</label> <input type="email" id="email"/> </div>
                <div><label htmlFor="password">Password</label> <input type="password" id="password"/> </div>
            </form> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={(e) => onChange(e)}
              />

              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => onChange(e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            {/* <Form.Label>Type of User </Form.Label>
            <Form.Control as="select" size="md">
              <option>Signup as Reader</option>
              <option>Signup as Blogger</option>
            </Form.Control> */}
            <Button variant="primary" type="submit" className="signup-btn">
              Signup
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
