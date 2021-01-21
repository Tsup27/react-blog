import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();

  const [error, setError] = useState("");

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let users = localStorage.getItem("users");
    users = JSON.parse(users);
    const user = users.find((item) => {
      return item.email == email;
    });
    if (!user) {
      setError("User not found");
    } else {
      if (password == user.password) {
        localStorage.setItem("loggedIn", JSON.stringify(user));
        window.location = "/";
        // history.push("/");
      }
    }
    console.log(user);
  };
  return (
    <div className='container-fluid login-form'>
      <div className='login-data'>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Login
          </Button>
          <br />
          {error}
        </Form>
      </div>
    </div>
  );
};
