import React from 'react'
import '../styles/Read.css'
import { useState } from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';


const data = [
    {
        question: 'Q1:  What is depression?',
        answer: 'A1: Clinical depression is a serious condition that negatively affects how a person thinks, feels, and behaves. In contrast to normal sadness, clinical depression is persistent, often interferes with a person’s ability to experience or anticipate pleasure, and significantly interferes with functioning in daily life. Untreated, symptoms can last for weeks, months, or years; and if inadequately treated, depression can lead to significant impairment, other health-related issues, and in rare cases, suicide.'
    },
    {
        question: 'Q2: What are the signs and symptoms of depression?',
        answer: 'A2: Some of the symptoms include: depressed mood most of the day, nearly every day, changes in appetite that result in weight losses or gains unrelated to dieting, changes in sleeping patterns, loss of energy or increased fatigue, doss of energy or increased fatigue.'
    },
    {
        question: 'Q3: How depression is diagnosed and treated?',
        answer: 'A3: The first step to being diagnosed is to visit a doctor for a medical evaluation. Certain medications, and some medical conditions such as thyroid disorder, can cause similar symptoms as depression. Once diagnosed, a person with depression can be treated by various methods. The mainstays of treatment for depression are any of a number of antidepressant medications and psychotherapy, which can also be used in combination.'
    },
    {
        question: 'Q4: Why is depression more prevalent in women than in men',
        answer: 'A4: Depression is twice as common among women as among men. About 20 percent of women will experience at least one episode of depression across their lifetime. Before adolescence, girls and boys experience depression at about the same frequency. By adolescence, however, girls become more likely to experience depression than boys. Research points to several possible reasons for this imbalance. The biological and hormonal changes that occur during puberty likely contribute to the sharp increase in rates of depression among adolescent girls.'
    },
    {
        question: 'Q5: What is treatment-resistant depression?',
        answer: 'A5: Treatment-resistant depression (TRD) is a term used in clinical psychiatry to describe cases of major depressive disorder that do not respond to standard treatments (at least two courses of antidepressant treatments). For many people, antidepressant treatment and/or ‘talk’ therapy (such as Cognitive Behavioral Therapy) ease symptoms of depression, but with treatment-resistant depression, little to no relief is realized. Treatment-resistant depression symptoms can range from mild to severe and may require trying a number of approaches to identify what helps. '
    },
    {
        question: 'Q6:Can depression be managed without medication?',
        answer: 'A6: Yes, many people with depression can manage their symptoms through psychotherapy, lifestyle changes, and support from friends and family. Medication is often prescribed for moderate to severe cases or when other treatments aren nott effective, but it is not always necessary.'
    },
    {
        question: 'Q7: How long does it take to recover from depression?',
        answer: 'A7: The duration of recovery from depression varies widely among individuals. Some people may experience significant improvement within weeks or months of treatment, while others may require more extended periods. Ongoing maintenance treatment may also be necessary to prevent relapse.'
    },
    {
        question: 'Q8: What are the potential side effects of antidepressant medications?',
        answer: 'A8: Antidepressant medications can have side effects, which vary depending on the specific medication. Common side effects may include nausea, weight gain, sexual dysfunction, insomnia, or drowsiness. It is essential to discuss any side effects with your healthcare provider to determine the best course of action.'
    },
    {
        question: 'Q9: Is anxiety the same as depression?',
        answer: 'A9: Anxiety and depression are distinct but often coexisting conditions. They share some symptoms, like changes in sleep patterns and difficulty concentrating, but they also have their unique features. Anxiety is characterized by excessive worry, while depression involves persistent low mood and loss of interest.'
    },
    {
        question: 'Q10: Is there a genetic component to depression?',
        answer: 'A10: Yes, there is evidence to suggest that genetics can play a role in the development of depression. Individuals with a family history of depression may have a higher risk of experiencing the condition themselves. However, genetics is just one factor, and environmental factors also contribute to the risk.'
    },
    {
        question: 'Q11: Is there a connection between seasonal changes and depression?',
        answer: 'A11: Yes, Seasonal Affective Disorder (SAD) is a type of depression that typically occurs during specific seasons, most commonly in the winter months when there is less natural sunlight. Light therapy and other treatments can be effective for SAD.'
    },
    {
        question: 'Q12: Are there any specific risk factors for depression in older adults?',
        answer: 'A12:  Older adults may be at risk for depression due to factors such as physical health problems, social isolation, bereavement (loss of loved ones), and medication side effects. Depression in older adults can sometimes be mistaken for normal aging, so it is essential to recognize and address it.'
    },
]

function FAQ2() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className='wrapper'>
            <Link to="/symptoms" className="back">
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

export default FAQ2
