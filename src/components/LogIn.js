import React from 'react';
import { Form, Button } from "react-bootstrap";

export default function LogIn({setToken}) {


  const handleLogin = () =>{
    localStorage.setItem('token', "password")
    setToken(localStorage.getItem('token'))
  }

  return (
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={handleLogin}>
      Logear
    </Button>
  </Form>
  )
}
