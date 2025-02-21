import React, { useEffect, useState } from 'react';
import '../styles/Benefits.css'; // Import the styling

const Benefits = () => {
    const benefitsList = [
        "Reduce stress and anxiety",
        "Flexibility",
        "Improve mood and overall well-being",
        "Enhance self-awareness",
        "Empowerment",
        "Boost self-esteem",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % benefitsList.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [benefitsList]);

    return (
        <div className="benefits-container" id="benefits">
            <ul className="benefits-list">
                {benefitsList.map((benefit, index) => (
                    <li
                        key={index}
                        className={`benefits-list-item ${index === activeIndex ? 'bold' : ''}`}
                    >
                        {benefit}
                    </li>
                ))}
            </ul>
            <div className="marquee-text">
                CALM. EMOTION. THERAPY. HALCYON. CURE.
            </div>

        </div>
    );
};

export default Benefits;
