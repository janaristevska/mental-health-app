import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from '../pages/BackTopStyled';
import '../styles/SymptomsInsomnia.css'; // Import your CSS file for styling


function SymptomsInsomnia() {
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
        <div className='sleep-symptoms-container'>
            <div className="symptoms-container">
                <header className='header'>
                    <h1 className='main-heading'>Insomnia Symptoms and Causes</h1>
                </header>

                <section className='content-section'>
                    <h2 className='sub-heading'>What is Insomnia?</h2>
                    <p>
                        Insomnia is a common sleep disorder that can make it hard to fall asleep, hard to stay asleep, or cause you to wake up too early and not be able to get back to sleep. You may still feel tired when you wake up. Insomnia can sap not only your energy level and mood but also your health, work performance and quality of life.
                    </p>
                </section>

                <section className='content-section'>
                    <h2 className="sub-heading">How Much Sleep is Enough?</h2>
                    <p>
                        How much sleep is enough varies from person to person, but most adults need seven to eight hours a night.
                    </p>
                </section>

                <section className='content-section'>
                    <h2 className="sub-heading">Symptoms</h2>
                    <ul className="symptom-list">
                        <li>Difficulty falling asleep at night</li>
                        <li>Waking up during the night</li>
                        <li>Waking up too early</li>
                        <li>Not feeling well-rested after a night's sleep</li>
                        <li>Daytime tiredness or sleepiness</li>
                        <li>Irritability, depression or anxiety</li>
                        <li>Difficulty paying attention, focusing on tasks or remembering</li>
                        <li>Increased errors or accidents</li>
                        <li>Ongoing worries about sleep</li>
                    </ul>
                </section>

                <section className='content-section'>
                    <h2 className="sub-heading">Causes</h2>
                    <p>Insomnia may be the primary problem, or it may be associated with other conditions.</p>
                    <p>Chronic insomnia is usually a result of stress, life events or habits that disrupt sleep. Treating the underlying cause can resolve the insomnia, but sometimes it can last for years.</p>
                    <h3>Common causes of chronic insomnia include:</h3>
                    <ul className="cause-list">
                        <li><b>Stress.</b> Concerns about work, school, health, finances or family can keep your mind active at night, making it difficult to sleep. Stressful life events or trauma — such as the death or illness of a loved one, divorce, or a job loss — also may lead to insomnia.</li>
                        <li><b>Travel or work schedule.</b> Your circadian rhythms act as an internal clock, guiding such things as your sleep-wake cycle, metabolism and body temperature. Disrupting your body's circadian rhythms can lead to insomnia. Causes include jet lag from traveling across multiple time zones, working a late or early shift, or frequently changing shifts.</li>
                        <li><b>Poor sleep habits.</b> Poor sleep habits include an irregular bedtime schedule, naps, stimulating activities before bed, an uncomfortable sleep environment, and using your bed for work, eating or watching TV. Computers, TVs, video games, smartphones or other screens just before bed can interfere with your sleep cycle.</li>
                        <li><b>Eating too much late in the evening.</b>Having a light snack before bedtime is OK, but eating too much may cause you to feel physically uncomfortable while lying down. Many people also experience heartburn, a backflow of acid and food from the stomach into the esophagus after eating, which may keep you awake.</li>
                        <li><b>Mental health disorders.</b> Anxiety disorders, such as post-traumatic stress disorder, may disrupt your sleep. Awakening too early can be a sign of depression. Insomnia often occurs with other mental health disorders as well.</li>
                        <li><b>Medications.</b>Many prescription drugs can interfere with sleep, such as certain antidepressants and medications for asthma or blood pressure. Many over-the-counter medications — such as some pain medications, allergy and cold medications, and weight-loss products — contain caffeine and other stimulants that can disrupt sleep.</li>
                        <li><b>Medical conditions.</b> Examples of conditions linked with insomnia include chronic pain, cancer, diabetes, heart disease, asthma, gastroesophageal reflux disease (GERD), overactive thyroid, Parkinson's disease and Alzheimer's disease.</li>
                        <li><b>Sleep-related disorders.</b> Sleep apnea causes you to stop breathing periodically throughout the night, interrupting your sleep. Restless legs syndrome causes unpleasant sensations in your legs and an almost irresistible desire to move them, which may prevent you from falling asleep.</li>
                        <li><b>Caffeine, nicotine and alcohol.</b> Coffee, tea, cola and other caffeinated drinks are stimulants. Drinking them in the late afternoon or evening can keep you from falling asleep at night. Nicotine in tobacco products is another stimulant that can interfere with sleep. Alcohol may help you fall asleep, but it prevents deeper stages of sleep and often causes awakening in the middle of the night.</li>
                    </ul>
                </section>

                <section className='content-section'>
                    <h2 className="sub-heading">Insomnia becomes more common with age. As you get older, you may experience:</h2>
                    <ul className="risk-factor-list">
                        <li>Changes in sleep patterns</li>
                        <li>Changes in activity</li>
                        <li>Changes in health</li>
                        <li>More medications</li>
                    </ul>
                </section>

                <section className='content-section'>
                    <h2 className="sub-heading">Risk factors</h2>
                    <p>Nearly everyone has an occasional sleepless night. But your risk of insomnia is greater if:</p>
                    <ul className="risk-factor-list">
                        <li>You're a woman</li>
                        <li>You're over age 60</li>
                        <li>You have a mental health disorder or physical health condition</li>
                        <li>You're under a lot of stress</li>
                        <li>You don't have a regular schedule</li>
                    </ul>
                </section>

                <section className='content-section'>
                    <h2 className="sub-heading">Complications</h2>
                    <p>Sleep is as important to your health as a healthy diet and regular physical activity. Whatever your reason for sleep loss, insomnia can affect you both mentally and physically. People with insomnia report a lower quality of life compared with people who are sleeping well.</p>
                    <p>Complications of insomnia may include:</p>
                    <ul className="complication-list">
                        <li>Lower performance on the job or at school</li>
                        <li>Slowed reaction time while driving and a higher risk of accidents</li>
                        <li>Mental health disorders, such as depression, an anxiety disorder or substance abuse</li>
                        <li>Increased risk and severity of long-term diseases or conditions, such as high blood pressure and heart disease</li>
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
        </div>

    );
}

export default SymptomsInsomnia;