import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from '../pages/BackTopStyled';
import '../styles/SymptomsInsomnia.css'; // Import your CSS file for styling


function SymptomsDepression() {
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
        <div className="depression-symptoms-container">
            <header className='header'>
                <h1 className='main-heading'> Depression Symptoms and Causes</h1>
            </header>

            <section className='content-section'>
                <h2 className='sub-heading'>What is Depression?</h2>
                <p>
                    Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.
                </p>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Depression symptoms in children and teens</h2>
                <ul>
                    <li>In younger children, symptoms of depression may include sadness, irritability, clinginess, worry, aches and pains, refusing to go to school, or being underweight.</li>
                    <li>In teens, symptoms may include sadness, irritability, feeling negative and worthless, anger, poor performance or poor attendance at school, feeling misunderstood and extremely sensitive, using recreational drugs or alcohol, eating or sleeping too much, self-harm, loss of interest in normal activities, and avoidance of social interaction.</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Depression symptoms in older adults</h2>
                <ul>
                    <li>Memory difficulties or personality changes</li>
                    <li>Physical aches or pain</li>
                    <li>Fatigue, loss of appetite, sleep problems or loss of interest in sex — not caused by a medical condition or medication</li>
                    <li>Often wanting to stay at home, rather than going out to socialize or doing new things</li>
                    <li>Suicidal thinking or feelings, especially in older men</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">When to see a doctor?</h2>
                <p>If you feel depressed, make an appointment to see your doctor or mental health professional as soon as you can. If you're reluctant to seek treatment, talk to a friend or loved one, any health care professional, a faith leader, or someone else you trust.</p>
            </section>
            <section className='content-section'>
                <h2 className="sub-heading">Symptoms</h2>
                <ul className="symptom-list">
                    <li>Feelings of sadness, tearfulness, emptiness or hopelessness</li>
                    <li>Angry outbursts, irritability or frustration, even over small matters</li>
                    <li>Sleep disturbances, including insomnia or sleeping too much</li>
                    <li>Tiredness and lack of energy, so even small tasks take extra effort</li>
                    <li>Reduced appetite and weight loss or increased cravings for food and weight gain</li>
                    <li>Anxiety, agitation or restlessness</li>
                    <li>Slowed thinking, speaking or body movements</li>
                    <li>Feelings of worthlessness or guilt, fixating on past failures or self-blame</li>
                    <li>Trouble thinking, concentrating, making decisions and remembering things</li>
                    <li>Experiencing gastrointestinal (GI) problems</li>
                    <li>Frequent or recurrent thoughts of death, suicidal thoughts, suicide attempts or suicide</li>
                    <li>Unexplained physical problems, such as back pain or headaches</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Causes</h2>
                <ul className="cause-list">
                    <li>Biological differences</li>
                    <li>Brain chemistry</li>
                    <li>Hormones</li>
                    <li>Inherited traits</li>
                    <li>Childhood Trauma</li>
                    <li>Caffeine and Stimulants</li>
                    <li>Social Isolation</li>
                    <li>Environmental Factors</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Risk factors</h2>
                <p>Depression often begins in the teens, 20s or 30s, but it can happen at any age. More women than men are diagnosed with depression, but this may be due in part because women are more likely to seek treatment.</p>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Factors that seem to increase the risk of developing or triggering depression include:</p>
                <ul className="risk-factor-list">
                    <li>Certain personality traits, such as low self-esteem and being too dependent, self-critical or pessimistic</li>
                    <li>Traumatic or stressful events, such as physical or sexual abuse, the death or loss of a loved one, a difficult relationship, or financial problems</li>
                    <li>Blood relatives with a history of depression, bipolar disorder, alcoholism or suicide</li>
                    <li>Abuse of alcohol or recreational drugs</li>
                    <li>Serious or chronic illness, including cancer, stroke, chronic pain or heart disease</li>
                    <li>Certain medications, such as some high blood pressure medications or sleeping pills (talk to your doctor before stopping any medication)</li>
                </ul>
            </section>

            <section className='content-section'>
                <h2 className="sub-heading">Complications</h2>
                <ul className="complication-list">
                    <li>Excess weight or obesity, which can lead to heart disease and diabetes</li>
                    <li>Pain or physical illness</li>
                    <li>Alcohol or drug misuse</li>
                    <li>Anxiety, panic disorder or social phobia</li>
                    <li>Family conflicts, relationship difficulties, and work or school problems</li>
                    <li>Social isolation</li>
                    <li>Suicidal feelings, suicide attempts or suicide</li>
                    <li>PSelf-mutilation, such as cutting</li>
                    <li>Premature death from medical conditions</li>
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

export default SymptomsDepression;