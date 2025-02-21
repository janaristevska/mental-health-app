import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from '../pages/BackTopStyled';
import '../styles/SleepDisorders.css'; // Import your CSS file
import major from '../images/major.jpg';
import persistent from '../images/persistent.jpg';
import perinatal from '../images/perinatal.png';
import season from '../images/season.jpg';
import psychosis from '../images/psychosis.jpg';
import melancholy from '../images/melancholy.jpg';
import paranoia from '../images/paranoia.jpg';
import bipolar from '../images/bipolar.jpg';
import premenstrual from '../images/premenstrual.jpg';
import { sub } from 'date-fns';
function DepressionDisordersPage() {
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
        <div className="depression-disorders-page">
            <h1 className='hrr'>The Most Common Depression Disorders</h1>
            <p className='pr'></p>

            <div className="container">
                <div className="disorder">
                    <h2>Major Depression </h2>
                    <img src={major} alt="Agoraphobia" />
                    <p>
                        Major depression is one of the most common mental disorders in the United States. For some individuals, major depression can result in severe impairments that interfere with or limit one’s ability to carry out major life activities.
                    </p>
                    <p>It is characterized by at least two weeks of pervasive low mood, low self-esteem, and loss of interest or pleasure in normally enjoyable activities.</p>
                </div>

                <div className="disorder">
                    <h2>Persistent Depressive Disorder</h2>
                    <img src={persistent} alt="Panic" />
                    <p>
                        Persistent depressive disorder (PDD) is a mild to moderate chronic depression. It involves a sad or dark mood most of the day, on most days, for two years or more. PDD is common and can happen to anyone at any age. The most effective treatment combines medication, counseling and healthy lifestyle choices.
                    </p>
                    <p>
                        PDD can happen to anyone at any age. In fact, 3% or more of the U.S. population experiences it at some point in their lives.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Perinatal Depression</h2>
                    <img src={perinatal} alt="Mutism" />
                    <p>Perinatal depression is depression that occurs during or after pregnancy. The symptoms can range from mild to severe. In rare cases, the symptoms are severe enough that the health of the mother and baby may be at risk. Perinatal depression can be treated.</p>
                    <p>
                        Mothers with perinatal depression experience feelings of extreme sadness, anxiety, and fatigue that may make it difficult for them to carry out daily tasks, including caring for themselves or others.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Seasonal Affective Disorder</h2>
                    <img src={season} alt="Phobias" />
                    <p>
                        The seasonal depression begins and ends when the seasons change. People may start to feel down when the days get shorter in the fall and winter and begin to feel better in the spring, with longer daylight hours.
                    </p>
                    <p>
                        In some cases, these mood changes are more serious and can affect how a person feels, thinks, and handles daily activities.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Psychosis</h2>
                    <img src={psychosis} alt="Social" />
                    <p>
                        People with psychosis typically experience delusions (false beliefs, for example, that people on television are sending them special messages or that others are trying to hurt them) and hallucinations (seeing or hearing things that others do not, such as hearing voices telling them to do something or criticizing them).
                    </p>
                    <p>
                        Other symptoms can include incoherent or nonsense speech and behavior that is inappropriate for the situation.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Melancholy</h2>
                    <img src={melancholy} alt="OCD" />
                    <p>
                        If you have melancholic depression, your symptoms might be worst in the mornings when you first wake up.  You feel intensely sad and lose interest in the activities you used to enjoy. You feel bad even when good things happen.
                    </p>
                    <p>
                        You might also feel particularly down in the mornings, lose weight, sleep poorly or have suicidal thoughts.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Paranoia</h2>
                    <img src={paranoia} alt="Post-Trauma" />
                    <p>
                        Paranoia is a state of mind in which a person believes that others are trying to harm, deceive or exploit them. It could be a feeling of being watched, listened to, followed or monitored in some way. It might be a belief that there is some kind of conspiracy operating against them.
                    </p>
                    <p>
                        People with paranoia sometimes have an increased sense of self-importance, believing that many others are taking notice of them when it is not true.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Bipolar disorder</h2>
                    <img src={bipolar} alt="Separation" />
                    <p>
                        Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).
                    </p>
                    <p>
                        When you become depressed, you may feel sad or hopeless and lose interest or pleasure in most activities. When your mood shifts to mania or hypomania (less extreme than mania), you may feel euphoric, full of energy or unusually irritable.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Premenstrual dysphoric disorder</h2>
                    <img src={premenstrual} alt="Illness" />
                    <p>
                        Premenstrual dysphoric disorder is a health problem that is similar to premenstrual syndrome  but is more serious. Premenstrual dysphoric disorder causes severe irritability, depression, or anxiety in the week or two before your period starts. Symptoms usually go away two to three days after your period starts. Some of the symptoms include lasting irritability or anger that may affect other people, feeling out of control, food cravings or binge eating, mood swings or crying often, tiredness or low energy.
                    </p>
                </div>

            </div>
            <BackTopWrapper
                title="Back to top"
                className={isVisible ? 'show' : ''}
                onClick={backToTop}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
            </BackTopWrapper>
        </div>
    );
}

export default DepressionDisordersPage;