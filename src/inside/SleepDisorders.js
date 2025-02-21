import React, { useState, useEffect } from 'react';
import { BackTopWrapper } from '../pages/BackTopStyled';
import '../styles/SleepDisorders.css'; // Import your CSS file
import insomnia from '../images/insomnia.jpg';
import snoring from '../images/snoring.webp';
import apnea from '../images/apnea.jpg';
import narcolepsy from '../images/narcolepsy.jpg';
import paralysis from '../images/paralysis.jpg';
import walking from '../images/walking.jpg';
import rls from '../images/rls.jpg';
import plmd from '../images/plmd.jpg';
import head from '../images/head.png';
import delayed from '../images/delayed.webp';
import rapideye from '../images/rapideye.jpg';
import fibromyalgia from '../images/fibromalagya.webp';
import sleeptalk from '../images/sleeptalk.jpg';
import terror from '../images/terror.jpg';
import nightmare from '../images/nightmare.jpg';
function SleepDisorders() {
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
        <div className="sleep-disorders-page">
            <p className='hrr'>The Most Common Sleep Disorders</p>
            <p className='pr'>Almost everyone has an occasional night with little or low-quality sleep. But when sleep problems start to affect your quality of life, you may have a sleep disorder. Sleep disorders are very common: it is estimated that between 25-30% of people suffer from one. Here is a rundown of some of the most common types.</p>

            <div className="container">
                {/* Insomnia */}
                <div className="disorder">
                    <h2>Insomnia</h2>
                    <img src={insomnia} alt="Insomnia" />
                    <p>
                        Ever had trouble falling asleep? Or do you find yourself waking up in the middle of the night, unable to fall back asleep? Is this something you experience more than three days a week? If so, you might be suffering from insomnia. Insomnia refers to habitual sleeplessness and it is the most common sleep disorder in the world. Insomnia is more common as you get older, and it can affect your life in a number of ways, including daytime fatigue, poor concentration and low mood.
                    </p>
                </div>

                {/* Snoring */}
                <div className="disorder">
                    <h2>Snoring</h2>
                    <img src={snoring} alt="Snoring" />
                    <p>
                        About half of all people in the world snore at some point in their lives. While both sexes snore, it’s more common in men: over 40% of adult men are habitual snorers, compared to 24% of adult women. Put simply, snoring is the sound that comes from obstructed air movement in your throat when you breathe while sleeping. Light snoring generally doesn’t usually affect your sleep quality – although it can be a problem for anyone you share a bed with. Heavy snoring, on the other hand, is associated with sleep apnea.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Sleep Apnea</h2>
                    <img src={apnea} alt="Snoring" />
                    <p>
                        Sleep apnea is a potentially serious sleep disorder. It usually occurs when the throat constricts for a time while you are asleep, which can stop you from breathing for a time (apnea), or cause your breathing to be significantly reduced (hypopnea). These breathing events can happen several times an hour while you are asleep, and may rouse you from sleep or stop you from getting enough oxygen. Symptoms of sleep apnea include restlessness while asleep, snoring and daytime sleepiness. If left untreated, sleep apnea can lead to serious health conditions.
                    </p>
                </div>


                <div className="disorder">
                    <h2>Narcolepsy</h2>
                    <img src={narcolepsy} alt="Snoring" />
                    <p>
                        Also referred to as excessive uncontrollable daytime sleepiness, narcolepsy causes overwhelming daytime sleepiness, which can cause you to succumb to short naps or ‘sleep attacks’ lasting around 15 minutes. It is a chronic sleep disorder affecting 1 in every 2,000 to 3,000 people. The cause of narcolepsy is linked to low levels of hypocretin, a chemical that plays an important role in regulating wakefulness. Factors including pregnancy, extreme stress and brain damage are also associated with the onset of narcolepsy.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Sleep Paralysis</h2>
                    <img src={paralysis} alt="Snoring" />
                    <p>
                        Imagine waking up in the middle of the night without being able to move or speak. Known to occur both when falling asleep and when waking up, sleep paralysis is the inability to move or speak even if you feel wide awake. A session usually lasts around one to two minutes and can be quite frightening for those who’ve experienced it.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Sleepwalking</h2>
                    <img src={walking} alt="Snoring" />
                    <p>
                        Sleepwalking is when a person walks around or performs other complex actions while sleeping. The activity is much more common in children than adults and more likely to happen if the person is sleep deprived. The sleepwalker will most likely not even remember what has happened and remains in deep sleep during the entire episode.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Restless Legs Syndrome</h2>
                    <img src={rls} alt="Snoring" />
                    <p>
                        The majority of people with restless legs syndrome (RLS) experience an uncomfortable or painful sensation that creates an irresistible urge to move their legs – sometimes described as a feeling of “pins and needles”. This can both make it hard to fall asleep and cause fragmented sleep. Also known as Willis-Ekbom disease, the condition affects around 5% of the adult population. There is also a link to pregnancy: about 1 in 5 pregnant women will experience symptoms.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Periodic Limb Movement Disorder</h2>
                    <img src={plmd} alt="Snoring" />
                    <p>
                        Not to be confused with restless legs syndrome, people with periodic limb movement disorder (PLMD) move or jerk their limbs, usually their legs, while asleep. While most people with PLMD are not actually aware of these involuntary movements, they can affect sleep quality – which may cause daytime fatigue or sleepiness.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Delayed Sleep Phase Disorder (DSPD)</h2>
                    <img src={delayed} alt="Snoring" />
                    <p>
                        Are you a night owl? Do you have trouble falling asleep on time even if you need to get up early? You may have Delayed sleep phase disorder (DSPD). DSPD is a circadian rhythm sleep disorder, whereby the ‘body clock’ doesn’t match the typical sleep window of most adults and tends to be delayed by two or more hours. Instead of a ‘normal’ bedtime, your ideal time to fall asleep may be several hours later. If you can’t fall asleep at the right time, it can leave you sleep deprived, especially if you have to follow a specific schedule such as starting work at 9 am.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Rapid Eye Movement Sleep Behavior Disorder (RBD) </h2>
                    <img src={rapideye} alt="Snoring" />
                    <p>
                        About 20% of sleep is spent in REM sleep, a phase in which most vivid dreaming occurs. Normally people don’t move during this sleep phase. But people with Rapid Eye Movement Sleep Behavior Disorder (RBD) act out their dreams. Because individuals with RBD may walk, hit or punch – it’s a disorder that can lead to serious injuries for both the person with RBD and those around them. RBD tends to affect men over 50, but not exclusively. Other risk factors include having narcolepsy, Parkinson’s disease or other degenerative disorders, as well as taking certain medications.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Fibromyalgia</h2>
                    <img src={fibromyalgia} alt="Snoring" />
                    <p>
                        Fibromyalgia is an autoimmune or inflammation-based illness, in which pain and sleep problems often coexist in a feedback loop. Fibromyalgia affects around 2-4% of the population, primarily women, and the vast majority of people with fibromyalgia report lighter, poor-quality sleep. Insomnia is also very common. For people with fibromyalgia, pain and difficulties sleeping often appear in flare-ups that last for days or weeks. Ensuring that you get plenty of exercise and enough vitamin D are both key therapies used to manage fibromyalgia.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Exploding Head Syndrome</h2>
                    <img src={head} alt="Snoring" />
                    <p>
                        An episode of exploding head syndrome (EHS) can feel like, well er… a loud explosion has gone off in your head. Usually painless, the ‘noise’ can still cause a lot of fear and distress – some people even think that they are having a stroke. Estimated to affect about 10% of the population at some point in their lives, the frequency of episodes can range from very rare, to several times a night.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Sleep Talking</h2>
                    <img src={sleeptalk} alt="Snoring" />
                    <p>
                        Finding out that you have been talking at night can feel embarrassing but is normally pretty harmless. You probably haven’t related any personal secrets or even said anything that makes much sense. Each sleep talking episode usually only lasts only a few seconds. When a person talks in their sleep during a deeper sleep phase, they often let out a moaning sound. During lighter phases of sleep, someone talking in their sleep often speaks in gibberish and rarely utters complete or coherent sentences.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Night Terrors</h2>
                    <img src={terror} alt="Snoring" />
                    <p>
                        A child screams in the middle of the night and sits up in bed, wide-eyed and sweating but still asleep. Sounds scary, right? Rest assured, there is often no need for concern. Night terrors affect almost 40% of children but unlike nightmares, night terrors take place during periods of deep sleep and children rarely remember them when they wake up. Night terrors are often paired with sleepwalking. Most children outgrow these episodes, and night terrors affect a much smaller percentage of adults.
                    </p>
                </div>

                <div className="disorder">
                    <h2>Nightmare Disorder</h2>
                    <img src={nightmare} alt="Snoring" />
                    <p>
                        Although most children and many adults have an occasional nightmare, if you repeatedly wake up feeling alert, and the frightening or anxiety-filled dream you have just had still feels fresh and easy to recall, you may be suffering from nightmare disorder. Unlike night terrors, nightmare disorder episodes usually take place during the lighter, second phase of sleep. Repeated nightmares can be frightening and cause significant distress. Nightmare disorder is more common in children, but also affect adults.
                    </p>
                </div>
                {/* Add more disorders here */}
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

export default SleepDisorders;