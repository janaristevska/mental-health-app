import React, { useState, useEffect } from 'react';
import video1 from '../images/videoplayback.mp4';
import video2 from '../images/control.mp4';
import video3 from '../images/video3.mp4';
import video4 from '../images/video4.mp4';
import video5 from '../images/video5.mp4';
import video6 from '../images/video6.mp4';
import img1 from '../images/anxiety.jpg';


const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
    // Add more quotes here
];

const MotivationPage = () => {
    const [answers, setAnswers] = useState([]);
    const questions = [
        {
            question: "What is the key to turning your dreams into reality?",
            options: [
                "Luck",
                "Hard work and determination",
                "Waiting for the right time",
                "Asking for help"
            ],
            answer: 1
        },
        {
            question: "What's the first step to overcoming a challenge?",
            options: [
                "Ignoring it and hoping it goes away",
                "Complaining about it to others",
                "Taking action and facing it head-on",
                "Procrastinating until you feel ready"
            ],
            answer: 2
        },
        {
            question: "What does failure teach you?",
            options: [
                "That you should give up",
                "That you're not good enough",
                "Valuable lessons and opportunities for growth",
                "That you should never try again"
            ],
            answer: 2
        },
        {
            question: "What mindset is essential for personal growth?",
            options: [
                "The fixed mindset that avoids challenges",
                "The growth mindset that embraces challenges",
                "The carefree mindset that doesn't worry about growth",
                "The closed mindset that avoids change"
            ],
            answer: 1
        },
        {
            question: "What role does setting goals play in achieving success?",
            options: [
                "Goals are unnecessary and restrictive",
                "Goals provide direction and motivation",
                "Goals are only for overly ambitious people",
                "Goals are best left for others to set for you"
            ],
            answer: 1
        },
        {
            question: "How does taking care of your well-being impact your motivation?",
            options: [
                "It doesn't matter; motivation is all about external factors",
                "It helps maintain a balanced and positive mindset",
                "It's a waste of time; motivation is about pushing yourself relentlessly",
                "Well-being has no relation to motivation"
            ],
            answer: 1
        },
        {
            question: "What's the importance of a positive support system?",
            options: [
                "It's not important; you can achieve everything alone",
                "A positive support system can provide encouragement during tough times",
                "Only negative people can offer useful insights",
                "Relying on others shows weakness"
            ],
            answer: 1
        },
        {
            question: "How can setbacks be reframed to maintain motivation?",
            options: [
                "Setbacks prove you're incapable",
                "Setbacks are just fate working against you",
                "Setbacks offer opportunities to learn and improve",
                "Setbacks mean you should change your goals"
            ],
            answer: 2
        },
        {
            question: "What does consistent effort lead to?",
            options: [
                "More frustration",
                "Random success",
                "Improvement and eventual success",
                "Burnout and exhaustion"
            ],
            answer: 2
        },
        {
            question: "What's the best time to start working on your goals?",
            options: [
                "When you're feeling bored",
                "When you have lots of free time",
                "Right now, regardless of circumstances",
                "When someone else tells you to start"
            ],
            answer: 2
        }
    ];

    const handleAnswerSelect = (questionIndex, selectedOption) => {
        setAnswers([...answers, { questionIndex, selectedOption }]);
    };

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


    return (
        <div className="motivation-container">
            <div className='quiz-container'>
                <h1>Motivational Quiz</h1>
                {questions.map((question, index) => (
                    <div key={index} className="question">
                        <p>{question.question}</p>
                        <div className="options">
                            {question.options.map((option, optionIndex) => (
                                <button
                                    key={optionIndex}
                                    onClick={() => handleAnswerSelect(index, optionIndex)}
                                    className={answers[index] === optionIndex ? "selected" : ""}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
                <h2>Quiz Answers:</h2>
                <ul>
                    {answers.map((answer, index) => (
                        <li key={index}>
                            {questions[answer.questionIndex].question}:{' '}
                            {questions[answer.questionIndex].options[answer.selectedOption]}
                        </li>
                    ))}
                </ul>

            </div>

            <div className="quote-container">
                <p className="quote">{randomQuote}</p>
            </div>
            <hr />
            <hr />
            <h1 className="motivation-title">Daily Motivation</h1>

            <h4>Motivational speech</h4>
            <div className='videos1'>
                <video controls >
                    <source src={video1} type="video/mp4" />
                </video>

                <video controls>
                    <source src={video2} type="video/mp4" />
                </video>

                <video controls>
                    <source src={video3} type="video/mp4" />
                </video>

            </div>
            <div className='videos2'>
                <video controls>
                    <source src={video4} type="video/mp4" />
                </video>

                <video controls>
                    <source src={video5} type="video/mp4" />
                </video>

                <video controls>
                    <source src={video6} type="video/mp4" />
                </video>
            </div>
            <hr />
            <hr />

        </div >
    );
};

export default MotivationPage;
