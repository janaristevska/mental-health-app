import React, { useState, useEffect } from 'react';
import '../styles/MoodTracker.css'
import { Link } from 'react-router-dom';

const MoodTracker = () => {
    const [moodsByDate, setMoodsByDate] = useState(JSON.parse(localStorage.getItem('moods')) || {});

    useEffect(() => {
        localStorage.setItem('moods', JSON.stringify(moodsByDate));
    }, [moodsByDate]);

    const showMessage = (message) => {
        // You can use a modal or a custom alert UI here
        alert(message);
    };

    const addMood = (mood) => {
        const currentDate = new Date();
        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const formattedDate = `${dayOfWeek[currentDate.getDay()]}, ${currentDate.toLocaleDateString()}`;

        const updatedMoods = { ...moodsByDate };

        if (!updatedMoods[formattedDate]) {
            updatedMoods[formattedDate] = [];
        }

        updatedMoods[formattedDate].push({ mood, timestamp: new Date() });
        setMoodsByDate(updatedMoods);

        if (mood === 'Great') {
            showMessage('Glad to hear that!');
        } else if (mood === 'Bad') {
            showMessage('Sorry to hear that!');
        } else if (mood === 'Okay') {
            showMessage("It's alright, we all have our days.");
        } else if (mood === 'Good') {
            showMessage("I'm glad to hear that you're doing well!");
        } else if (mood === 'Awful') {
            showMessage("Sorry to hear that.Tough times don't last forever!");
        }
    };

    return (
        <div className='track'>
            <Link to="/service2" className='continue'>
                <button>Continue</button>
            </Link>
            <h2>Mood Tracker</h2>
            <div className="mood-buttons">
                <button onClick={() => addMood('Great')}>Great</button>
                <button onClick={() => addMood('Good')}>Good</button>
                <button onClick={() => addMood('Okay')}>Okay</button>
                <button onClick={() => addMood('Bad')}>Bad</button>
                <button onClick={() => addMood('Awful')}>Awful</button>
            </div>
            <div>
                <h3>Recent Moods:</h3>
                {Object.keys(moodsByDate).map((date) => (
                    <div key={date}>
                        <h4>{date}</h4>
                        <ul>
                            {moodsByDate[date].map((moodData, index) => (
                                <li key={index}>
                                    {moodData.mood} - {new Date(moodData.timestamp).toLocaleTimeString()}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MoodTracker;
