import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Service.css';
function Service() {
    return (
        <div className='service'>
            <h2 className='header'>
                What type of service are you looking for?
            </h2>

            <Link to="/aq1">
                <button>
                    Reduce stress or anxiety
                </button>
            </Link>
            <Link to="/dq1">
                <button >
                    Depression Therapy
                </button>
            </Link>
            <Link to="/sq1">
                <button>
                    Improve sleep quality
                </button>
            </Link>
        </div>
    )
}

export default Service
