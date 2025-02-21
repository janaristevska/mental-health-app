import React from 'react'
import '../styles/Motivation.css';

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "“Happiness is not something ready made. It comes from your own actions.” - Dalai Lama XIV",
    "“Your passion is waiting for your courage to catch up.” —Isabelle Lafleche",
    "“Magic is believing in yourself. If you can make that happen, you can make anything happen.” —Johann Wolfgang Von Goethe"
    // Add more quotes here
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

function Motivation() {
    return (
        <div className='motivation'>
            <div className="quote-container">
                <p className="quote">{randomQuote}</p>
            </div>
            <h1 className='titlee'>Motivation</h1>
            <p className='paragraph'>People with depression often experience a wide range of symptoms, such as low moods, feelings of hopelessness and sadness, sleep disturbances and appetite changes. Another common symptom that people with depression experience is a lack of motivation in their day to day lives. Someone with depression may also feel a lack of pleasure regarding activities and hobbies they once did.</p>
            <p className='paragraph'>Here, we will explore what a lack of motivation might feel like for someone struggling with depression and provide tips on the things you can do to increase your motivation levels. We will also provide information on getting the support you need for your depression, if this continues to have a negative effect on your life and wellbeing.</p>

            <h1 className='titlee'>Does depression cause a lack of motivation?</h1>
            <p className='paragraph'>Experiencing little to no motivation is one of the core symptoms of depression. A lack of motivation when depressed may mean that you:</p>
            <br></br>
            <ul className='list'>
                <li>Have little to no energy, causing you to feel lethargic</li>
                <li>Struggle to get out of bed in the morning and face the day</li>
                <li>Become uninterested in looking after your physical appearance or personal hygiene</li>
                <li>Become uninterested in activities or hobbies you used to enjoy</li>
                <li>Don’t want to socialise with other people</li>
                <li>Struggle to concentrate or perform well at work</li>
                <li>Struggle to keep on top of daily tasks and responsibilities</li>
            </ul>

            <h1 className='titlee'>How to get motivated when depresse</h1>
            <p className='paragraph'>If you’re feeling like you don't want to do anything or are unmotivated as a result of your depression, the prospect of doing things to try and motivate yourself may seem impossible and somewhat paradoxical. You may be wondering how you’ll find the motivation to motivate yourself!</p>
            <p className='paragraph'>However, there are a number of really simple things you can do that can help to boost your mood and motivation levels, helping you to feel better, more in control and enable you to cope with depression symptoms when they arise.</p>
            <p className='paragraph'>You could try the following:</p>
            <ul className='list'>
                <li>Set yourself a daily routine and try to stick to it as much as possible</li>
                <li>Practise good sleep hygiene</li>
                <li>Go for a walk or do some exercise</li>
                <li>Socialise with family or friends</li>
            </ul>

            <h1 className='titlee'>Affirmations for motivation</h1>
            <p className='paragraph'>Using positive self-affirmations can also help to increase your levels of motivation. Every morning when you wake up, pick a few of the following and say them out loud to yourself and/or write them down.</p>
            <ul className='list'>
                <li>I wake up feeling motivated to start the day</li>
                <li>Everything I need is within me</li>
                <li>I am rising above my depression</li>
                <li>I am getting better and stronger every day</li>
                <li>Today will be a good day</li>
                <li>I am strong and confident</li>
                <li>I can achieve whatever I want to achieve</li>
                <li>I am grateful for today</li>
                <li>I am constantly growing and evolving</li>
                <li>I am proud of myself</li>
                <li>I am motivated to achieve my dreams</li>
                <li>My past does not define me</li>
            </ul>

            <h1 className='titlee'>What is Low Motivation?</h1>
            <p>Depression and low motivation go hand-in-hand. That said, while a lack of motivation is one of depression’s most common symptoms, it can be caused by other factors, too. For instance, you could lack motivation if you are under a lot of stress at work or experiencing something that impacts your self-esteem and overall confidence.</p>
            <h4 className='titlee'>8 Symptoms of Low Motivation:</h4>
            <ol>
                <li>You’re easily overwhelmed. Sometimes, just looking at a sink full of dishes or thinking about tomorrow’s calendar can make you want to go back to bed and turn off the lights.</li>
                <li>You have no idea what you want.
                    Decision-making can become a real chore when you are feeling unmotivated on a consistent basis.</li>
                <li>You lose control of your physical health.
                    Weight gain and weight loss can be attributed to states of anxiety and depression. As people lose control over their physiology, they lose motivation, creating a vicious circle of despair.</li>
                <li>Lacking motivation has become part of your identity.
                    Sometimes, people get so used to having no ‘get up and go’ that a lack of motivation becomes part of their identity.</li>
                <li>You procrastinate all the time.
                    While procrastination is part of human nature, depression and anxiety can make it impossible to undertake essential tasks.</li>
                <li>Do you feel as though you no longer set goals or aim to achieve great things in life? A distinct lack of ambition is a common symptom of low motivation.</li>
                <li>You favor motivation over habits.
                    Habits can be the building blocks to recovery when you lack motivation. Favoring feelings of motivation instead of healthy routines can lead to more intense anxiety and low moods.</li>
                <li>You feel lost.
                    The world can be a scary place, even to the most motivated of people. Feeling lost and confused is part and parcel of depression, but these feelings are not forever.</li>
            </ol>
        </div>
    )
}

export default Motivation