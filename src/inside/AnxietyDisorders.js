import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from '../pages/BackTopStyled';
import '../styles/SleepDisorders.css'; // Import your CSS file
import agoraphobia from '../images/agoraphobia.jpg';
import panic from '../images/panic.jpg';
import mutism from '../images/mutism.jpg';
import phobias from '../images/phobias.webp';
import social from '../images/social.jpg';
import ocd from '../images/ocd.jpg';
import ptsd from '../images/ptsd.webp';
import separation from '../images/separation.webp';
import illness from '../images/illness.jpg';
import hair from '../images/hair.jpg';
import skin from '../images/skin.jpg';
import substance from '../images/substance.jpg';
import body from '../images/body.jpg';
import hoarding from '../images/hoarding.jpg';
import adjusment from '../images/adjusment.jpg';
import { sub } from 'date-fns';

function AnxietyDisorders() {
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
        <div className="anxiety-disorders-page">
            <h1 className='hrr' style={{ marginLeft: '510px', marginTop: '35px' }}>The Most Common Anxiety Disorders</h1>
            <p className='pr' style={{ color: 'black' }}>Anxiety is a normal reaction to stress. Mild levels of anxiety can be beneficial in some situations. It can alert us to dangers and help us prepare and pay attention.</p>

            <div className="container">
                <div className="disorder">
                    <h2>Agoraphobia</h2>
                    <img src={agoraphobia} alt="Agoraphobia" />
                    <p>
                        Agoraphobia is a type of anxiety disorder. Agoraphobia involves fearing and avoiding places or situations that might cause panic and feelings of being trapped, helpless or embarrassed. You may fear an actual or upcoming situation. For example, you may fear using public transportation, being in open or enclosed spaces, standing in line, or being in a crowd.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Panic disorder</h2>
                    <img src={panic} alt="Panic" />
                    <p>
                        Panic disorder involves repeated episodes of sudden feelings of intense anxiety and fear or terror that reach a peak within minutes (panic attacks). You may have feelings of impending doom, shortness of breath, chest pain, or a rapid, fluttering or pounding heart (heart palpitations). These panic attacks may lead to worrying about them happening again or avoiding situations in which they have occurred.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Selective mutism</h2>
                    <img src={mutism} alt="Mutism" />
                    <p>
                        Selective mutism is an anxiety disorder where a person is unable to speak in certain social situations, such as with classmates at school or to relatives they do not see very often.
                    </p>
                    <p>It usually starts during childhood and, if left untreated, can persist into adulthood. A child or adult with selective mutism does not refuse or choose not to speak at certain times, they're literally unable to speak. </p>
                </div>

                <div className="disorder">
                    <h2>Specific phobias</h2>
                    <img src={phobias} alt="Phobias" />
                    <p>
                        Specific phobias are an extreme fear of objects or situations that pose little or no danger but make you highly anxious. So you try to stay away from these things. Unlike the brief anxiety you may feel when giving a speech or taking a test, specific phobias are long-lasting. Without treatment, specific phobias tend to last a lifetime.
                    </p>
                    <p>Phobias can cause strong physical, mental and emotional responses. They also can affect how you act at work or school, or in social situations.</p>
                </div>

                <div className="disorder">
                    <h2>Social anxiety disorder</h2>
                    <img src={social} alt="Social" />
                    <p>
                        Social anxiety disorder is an intense, persistent fear of being watched and judged by others. For people with social anxiety disorder, the fear of social situations may feel so intense that it seems beyond their control. For some people, this fear may get in the way of going to work, attending school, or doing everyday things.
                    </p>
                    <p>Learning coping skills in psychotherapy and taking medications can help you gain confidence and improve your ability to interact with others.</p>
                </div>

                <div className="disorder">
                    <h2>Obsessive-Compulsive Disorder (OCD)</h2>
                    <img src={ocd} alt="OCD" />
                    <p>
                        OCD is characterized by recurrent, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to alleviate the distress caused by the obsessions. Common obsessions include fears of contamination, harm, or the need for symmetry.
                    </p>
                    <p>You may try to ignore or stop your obsessions, but that only increases your distress and anxiety. Ultimately, you feel driven to perform compulsive acts to try to ease your stress. </p>
                </div>

                <div className="disorder">
                    <h2>Post-Traumatic Stress Disorder (PTSD)</h2>
                    <img src={ptsd} alt="Post-Trauma" />
                    <p>
                        PTSD can develop after experiencing a traumatic event, such as combat, sexual assault, or a natural disaster. Symptoms include flashbacks, nightmares, intrusive thoughts, and avoidance of reminders of the trauma.',
                    </p>
                    <p>
                        Most people who go through traumatic events may have temporary difficulty adjusting and coping, but with time and good self-care, they usually get better.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Separation Anxiety Disorder</h2>
                    <img src={separation} alt="Separation" />
                    <p>
                        This disorder primarily affects children and is characterized by excessive anxiety about being separated from caregivers or loved ones. It can lead to distress and impairment in daily functioning.
                    </p>
                    <p> Young children often experience a period of separation anxiety, but most children outgrow separation anxiety by about 3 years of age.</p>
                    <p>Less often, separation anxiety disorder can also occur in teenagers and adults, causing significant problems leaving home or going to work.</p>
                </div>

                <div className="disorder">
                    <h2>Illness anxiety disorder</h2>
                    <img src={illness} alt="Illness" />
                    <p>
                        Illness anxiety disorder, sometimes called hypochondriasis or health anxiety, is worrying excessively that you are or may become seriously ill. You may have no physical symptoms. Or you may believe that normal body sensations or minor symptoms are signs of severe illness, even though a thorough medical exam doesn't reveal a serious medical condition. You may experience extreme anxiety that body sensations, such as muscle twitching or fatigue, are associated with a specific, serious illness.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Trichotillomania(hair-pulling disorder)</h2>
                    <img src={hair} alt="Trichotillomania" />
                    <p>Trichotillomania, also called hair-pulling disorder, is a mental disorder that involves recurrent, irresistible urges to pull out hair from your scalp, eyebrows or other areas of your body, despite trying to stop. Hair pulling from the scalp often leaves patchy bald spots, which causes significant distress and can interfere with social or work functioning. People with trichotillomania may go to great lengths to disguise the loss of hair.</p>
                </div>

                <div className="disorder">
                    <h2>Dermatillomania(skin-picking disorder)</h2>
                    <img src={skin} alt="Dermatillomania" />
                    <p>
                        Dermatillomania,also called skin-picking disorder, is a mental illness related to obsessive-compulsive disorder. It is characterized by repeated picking at one’s own skin which results in areas of swollen or broken skin and causes significant disruption in one's life.
                    </p>
                    <p>Skin picking is a body-focused repetitive behavior that typically begins during adolescence, often with, or after the onset of, puberty around ages 13-15.</p>
                </div>

                <div className="disorder">
                    <h2>Substance-Induced Anxiety Disorder</h2>
                    <img src={substance} alt="Substance" />
                    <p>Substance-induced anxiety disorder is nervousness, restlessness, or panic caused by taking a drug or stopping a drug.</p>
                    <p>This anxiety may present just like typical anxiety. You may experience excessive worry, muscle tension, poor concentration, and irritability. Substance-induced anxiety tends to resolve quickly. If you use the substance again, though, symptoms will likely return.</p>
                </div>

                <div className="disorder">
                    <h2>Body Dysmorphic Disorder</h2>
                    <img src={body} alt="Body" />
                    <p>Body dysmorphic disorder is a mental health condition in which you can't stop thinking about one or more perceived defects or flaws in your appearance — a flaw that appears minor or can't be seen by others. But you may feel so embarrassed, ashamed and anxious that you may avoid many social situations.</p>
                    <p>When you have body dysmorphic disorder, you intensely focus on your appearance and body image, repeatedly checking the mirror. </p>
                </div>

                <div className="disorder">
                    <h2>Hoarding Disorder</h2>
                    <img src={hoarding} alt="Hoarding" />
                    <p>
                        Hoarding disorder is an ongoing difficulty throwing away or parting with possessions because you believe that you need to save them. You may experience distress at the thought of getting rid of the items. You gradually keep or gather a huge number of items, regardless of their actual value.
                    </p>
                    <p>Hoarding ranges from mild to severe. In some cases, hoarding may not have much impact on your life, while in other cases it seriously affects your daily functioning.</p>
                </div>

                <div className="disorder">
                    <h2>Adjustment Disorders </h2>
                    <img src={adjusment} alt="Adjusment" />
                    <p>
                        Adjustment disorders are excessive reactions to stress that involve negative thoughts, strong emotions and changes in behavior. The reaction to a stressful change or event is much more intense than would typically be expected. This can cause a lot of problems in getting along with others, as well as at work or school.
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

export default AnxietyDisorders;