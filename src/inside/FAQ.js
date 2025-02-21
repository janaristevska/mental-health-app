import React from 'react'
import '../styles/Read.css'
import { useState } from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';


const data = [
    {
        question: 'Q1: What is anxiety?',
        answer: 'A1: Anxiety is a natural response to stress, characterized by feelings of worry, fear, and unease. It is a normal part of life, but excessive or persistent anxiety can become a mental health disorder.'
    },
    {
        question: 'Q2: What are the common symptoms of anxiety?',
        answer: 'A2: Common symptoms include excessive worry, restlessness, irritability, muscle tension, difficulty concentrating, racing thoughts, and physical symptoms like increased heart rate and shallow breathing.'
    },
    {
        question: 'Q3: How is anxiety different from an anxiety disorder?',
        answer: 'A3: While anxiety is a common emotional response, an anxiety disorder involves chronic and excessive worry that interferes with daily functioning. Anxiety disorders include generalized anxiety disorder (GAD), panic disorder, social anxiety disorder, and specific phobias.'
    },
    {
        question: 'Q4: What causes anxiety?',
        answer: 'A4: Anxiety can stem from a combination of factors, including genetics, brain chemistry, personality, life experiences, and traumatic events. Stressful situations and major life changes can also trigger or worsen anxiety.'
    },
    {
        question: 'Q5: How can I manage mild anxiety on my own?',
        answer: 'A5: Practice stress-reduction techniques such as deep breathing, progressive muscle relaxation, meditation, and exercise. Maintaining a balanced diet, getting adequate sleep, and engaging in activities you enjoy can also help.'
    },
    {
        question: 'Q6: When should I seek professional help for anxiety?',
        answer: 'A6: If anxiety is interfering with your daily life, causing significant distress, or lasting for several weeks, it is advisable to seek help. A mental health professional, such as a therapist or psychiatrist, can provide guidance and treatment options.'
    },
    {
        question: 'Q7: What are the treatment options for anxiety disorders?',
        answer: 'A7: Treatment may include therapy (cognitive-behavioral therapy, exposure therapy, etc.), medication (antidepressants, anti-anxiety medications), and lifestyle changes. The approach depends on the severity of the anxiety and individual preferences.'
    },
    {
        question: 'Q8: Can anxiety be prevented?',
        answer: 'A8: While you can not completely prevent anxiety, you can reduce its impact by maintaining a healthy lifestyle, managing stress, practicing relaxation techniques, and seeking help early if you notice signs of excessive anxiety.'
    },
    {
        question: 'Q9: Is anxiety the same as depression?',
        answer: 'A9: Anxiety and depression are distinct but often coexisting conditions. They share some symptoms, like changes in sleep patterns and difficulty concentrating, but they also have their unique features. Anxiety is characterized by excessive worry, while depression involves persistent low mood and loss of interest.'
    },
    {
        question: 'Q10:  Can children and teenagers experience anxiety?',
        answer: 'A10: Yes, anxiety can affect individuals of all ages, including children and teenagers. Childhood anxiety disorders may manifest as excessive fears, separation anxiety, social anxiety, or specific phobias.'
    },
    {
        question: 'Q11: Can lifestyle changes help with anxiety?',
        answer: 'A11: Yes, adopting a healthy lifestyle can significantly reduce anxiety. Regular exercise, a balanced diet, sufficient sleep, mindfulness practices, and avoiding excessive caffeine and alcohol can all contribute to managing anxiety.'
    },
    {
        question: 'Q12: Is occasional anxiety normal?',
        answer: 'A12: Yes, feeling anxious in response to stressful or challenging situations is a normal human reaction. It becomes a concern when the anxiety is disproportionate to the situation or persists even when there is no apparent reason.'
    },
]

function FAQ() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className='wrapper'>
            <Link to="/meditation" className="back">
                <MdOutlineArrowBackIosNew />
            </Link>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'answer show' : 'answer'}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQ
