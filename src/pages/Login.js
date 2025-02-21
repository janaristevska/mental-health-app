
import userEvent from '@testing-library/user-event'
import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { useScrollTrigger } from '@mui/material';
import { Alert } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import '../styles/Login.css';


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/service2")
        }
        catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }
    return (
        <>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center  mb-4'> Log in</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={(emailRef)} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={(passwordRef)} required />
                        </Form.Group>

                        <Button style={{ marginTop: '20px' }} disabled={loading} className='w-100' type='submit'>Log in</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                </Card.Body>
            </Card >
            <div className='acc' style={{ marginTop: '33px' }}>
                Need an account? <Link to="/getstarted">Get started</Link>
            </div>
        </>
    )
}

export default Login


