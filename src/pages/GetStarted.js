import userEvent from '@testing-library/user-event'
import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { useScrollTrigger } from '@mui/material';
import { Alert } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import '../styles/GetStarted.css';

function GetStarted() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { getstarted } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await getstarted(emailRef.current.value, passwordRef.current.value)
            history.push("/smth")
        }
        catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }
    return (
        <>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center  mb-4'>Get Started</h2>
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
                        <Form.Group id='password confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={(passwordConfirmRef)} required />
                        </Form.Group>
                        <Button style={{ marginTop: '20px' }} disabled={loading} className='w-100' type='submit'>Get Started</Button>
                    </Form>
                </Card.Body>
            </Card >
            <div className='acc' style={{ marginTop: '80px' }}>
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}

export default GetStarted
