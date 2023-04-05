import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import { loginHandler } from '../../Hooks/LoginHook';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function LoginForm() {
  const navigate = useNavigate()
  const [loginLoading, setLoginLoading] = useState(false)
  async function loginTrigger(e) {
    e.preventDefault()
    setLoginLoading(true)
    await loginHandler(username, password, navigate)
    setLoginLoading(false)
  }
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='form-page'>
      <Form className='form-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        {!loginLoading ? <Button variant="primary" type="submit" onClick={(e) => loginTrigger(e)}>
          Submit
        </Button> : <Button variant="primary" type="submit" disabled>
          Loading...
        </Button>}
      </Form>
    </div>
  );
}
