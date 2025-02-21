import React, { useState, useEffect } from 'react';
import '../styles/SymptomsInsomnia.css'; // Import your CSS file for styling
import '../styles/AnxietySym.css';
import { BackTopWrapper } from '../pages/BackTopStyled';

function SymptomsAnxiety() {
    const [isVisible, setIsVisible] = useState(false);

    // back-to-top visibility toggling
    useEffect(() => {
        const handleIsVisible = () => {
            if (window.scrollY >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleIsVisible);

        return () => {
            window.removeEventListener('scroll', handleIsVisible);
        };
    }, []);


    // back-to-top functionality
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="anxiety-symptoms-container">
            <header className='header'>
                <h1 className='main-heading'>Anxiety Symptoms and Causes</h1>
            </header>

            <section className='content-section'>
                <h2 className='sub-heading'>What is Anxiety?</h2>
                <p>
                    Anxiety is a natural and common human emotion that serves as a response to stress or perceived threats. It is often characterized by feelings of unease, worry, fear, or apprehension. Anxiety can manifest both mentally and physically and can range from mild to severe. It can be a normal response to situations that are challenging or potentially dangerous, helping individuals stay alert and focused in the face of threats.
                </p>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Symptoms</h2>
                <ul className="symptom-list">
                    <li>Feeling nervous, restless or tense</li>
                    <li>Having a sense of impending danger, panic or doom</li>
                    <li>Having an increased heart rate</li>
                    <li>Breathing rapidly (hyperventilation)</li>
                    <li>Sweating</li>
                    <li>Trembling</li>
                    <li>Feeling weak or tired</li>
                    <li>Trouble concentrating or thinking about anything other than the present worry</li>
                    <li>Having trouble sleeping</li>
                    <li>Experiencing gastrointestinal (GI) problems</li>
                    <li>Having difficulty controlling worry</li>
                    <li>Having the urge to avoid things that trigger anxiety</li>
                    <li></li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Causes</h2>
                <ul className="cause-list">
                    <li>Family history</li>
                    <li>Stressful events</li>
                    <li>Health issues</li>
                    <li>Substance use</li>
                    <li>Personality factors</li>
                    <li>Caffeine and Stimulants</li>
                    <li>Hormonal Changes</li>
                    <li>Social Factors</li>
                    <li>Financial Stress</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Risk factors</h2>
                <p>These factors may increase your risk of developing an anxiety disorder:</p>
                <ul className="risk-factor-list">
                    <li>Trauma</li>
                    <li>Stress due to an illness</li>
                    <li>Stress buildup</li>
                    <li>Drugs or alcohol</li>
                    <li>Stressful Life Events</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Complications</h2>
                <p>Having an anxiety disorder does more than make you worry. It can also lead to, or worsen, other mental and physical conditions, such as:</p>
                <ul className="complication-list">
                    <li>Depression (which often occurs with an anxiety disorder) or other mental health disorders</li>
                    <li>Substance misuse</li>
                    <li>Trouble sleeping (insomnia)</li>
                    <li>Digestive or bowel problems</li>
                    <li>Headaches and chronic pain</li>
                    <li>Social isolation</li>
                    <li>Problems functioning at school or work</li>
                    <li>Poor quality of life</li>
                    <li>Suicide</li>
                </ul>
            </section>
            <BackTopWrapper
                title="Back to top"
                className={isVisible ? 'show' : ''}
                onClick={backToTop}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
            </BackTopWrapper>

            {/* Add more sections for Causes, Risk factors, etc. */}
        </div>
    );
}

export default SymptomsAnxiety;