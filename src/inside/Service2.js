import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Service2.css';

function Service2() {
    return (
        <div className='service2'>
            <h2>
                What type of service are you looking for?
            </h2>

            <div className='cho'>
                <Link to="/anxiety">
                    <button>
                        Reduce stress or anxiety
                    </button>
                </Link>
                <Link to="/depression">
                    <button >
                        Depression Therapy
                    </button>
                </Link>
                <Link to="/insomnia">
                    <button>
                        Improve sleep quality
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Service2
