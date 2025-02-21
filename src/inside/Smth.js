import React, { useState, useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Smth.css';

export default function Smth() {
    const [error, seteError] = useState("")
    const { currentUser, logout } = useAuth("")
    const history = useHistory()
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    async function handleLogout() {
        seteError('')

        try {
            await logout()
            history.push('/login')
        }
        catch {
            seteError('Failed to log out')
        }
    }
    useEffect(() => {
        // Trigger popup animation when component mounts
        setIsPopupVisible(true);
    }, []);


    return (
        <div className="smth-popup-container">
            <div className={`smth-popup ${isPopupVisible ? 'active' : ''}`}>
                <div className="popup-content">
                    <p className="msg1">Welcome to Mental Health</p>
                    <p className="msg2">Congratulations on taking the first step towards a mentally stronger you.</p>
                    <p className="msg3">Let's get started! <span className="msg4">Just a few questions to personalize your experience.</span></p>
                    <Link to="/service">
                        <button>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


/*
 <h2 className='header'>
                What type of service are you looking for?
            </h2>

            <Link to="/feelings" className="link"><div className='service'>Reduce stress or anxiety</div></Link>
            <Link to="/dailylife"><div className='service'>Depression Therapy</div></Link>
            <Link to="/sleeping"><div className='service'>Improve sleep quality</div></Link>

            <Card>
                <Card.Body>
                    <div className='card-body' style={{ width: "400px" }}>
                        <h2 >Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong>{currentUser.email}
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-3"> Update Profile </Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>


            */