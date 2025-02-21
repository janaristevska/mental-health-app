import React, { useState } from 'react';

const Meditation = ({ title, description, duration }) => {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <div className="meditation-item">
            <img src="meditation-thumbnail.jpg" alt={title} />
            <h4>{title}</h4>
            <p className="meditation-duration">{duration}</p>
            <button onClick={toggleContent}>
                {showContent ? 'Hide Details' : 'Choose'}
            </button>
            {showContent && <p className="meditation-description">{description}</p>}
        </div>
    );
};

// Meditation Category Component (Updated)
const MeditationCategory = ({ category, meditations }) => (
    <section className="meditation-category">
        <h3>{category}</h3>
        <div className="meditation-list">
            {meditations.map((meditation) => (
                <Meditation
                    key={meditation.id}
                    title={meditation.title}
                    description={meditation.description}
                    duration={meditation.duration}
                />
            ))}
        </div>
    </section>
);

// Main Meditation Page Component (same as before)
