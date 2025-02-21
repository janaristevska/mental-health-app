import React, { useState, useEffect } from 'react'
import '../styles/TipsInsomnia.css';
import nap from '../images/napp.png';
import alc from '../images/alcc.png';
import caff from '../images/cafff.png';
import smoke from '../images/smokee.png';
import eat from '../images/eatt.png';
import screen from '../images/screenn.png';
import sport from '../images/sport.png';
import sched from '../images/sched.png';
import fruit from '../images/fruit.png';
import medi from '../images/medi.png';
import yoga from '../images/yoga.png';
import worry from '../images/worry.png';
import { colors } from '@mui/material';
import Sidebar from './Sidebar';
import { useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink and scroll
import { BackTopWrapper } from '../pages/BackTopStyled';

export default function TipsInsomnia() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const [navbar, setNavbar] = useState(false);



    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const location = useLocation();

    const scrollToTop = () => {
        scroll.scrollToTop(); // Scroll to the top of the page
        closeMenu(); // Close the mobile menu if open
    }

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
        <div className='tips-container'>
            <p className='hrr'>Tips to Prevent Insomnia</p>
            <div className='images-container'>
                <div>
                    <ScrollLink
                        to="nap"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={nap}></img>
                        <div className='npr'><span>1</span> <span>Avoid taking naps</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="alcohol"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={alc}></img>
                        <div className='npr'><span>2</span> <span>Avoid alcohol</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="caffeine"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={caff}></img>
                        <div className='npr'><span>3</span> <span>Avoid caffeine</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="smoke"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={smoke}></img>
                        <div className='npr'><span>4</span> <span>Avoid smoking cigarettes</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="eating"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={eat}></img>
                        <div className='npr'><span>5</span> <span>Try not to eat too late</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="screen"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={screen}></img>
                        <div className='npr'><span>6</span> <span>Limit screen time before bed</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="healthy"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={sport}></img>
                        <div className='npr'><span>7</span> <span>Maintain a healthy lifestyle</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="schedule"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={sched}></img>
                        <div className='npr'><span>8</span> <span>Have a consistent sleep schedule</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="food"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={fruit}></img>
                        <div className='npr'><span>9</span> <span>Еat healthy food</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="meditate"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={medi}></img>
                        <div className='npr'><span>10</span> <span>Meditate</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="yoga"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={yoga}></img>
                        <div className='npr'><span>11</span> <span>Do yoga</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="worries"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={worry}></img>
                        <div className='npr'><span>12</span> <span>Don't take your worries to bed</span></div>
                    </ScrollLink>
                </div>
            </div>

            <div>
                <div className='numbers'><span>1</span> <span>Avoid taking naps</span></div>
            </div>
            <div className='textttt' id='nap'>Napping can sometimes contribute to insomnia, but it's important to note that not everyone experiences this effect, and it depends on several factors, including the duration and timing of the nap, an individual's sleep needs, and their overall sleep hygiene.
                Napping, episodes of short daytime sleep separated from the main sleep period, can compensate for the detrimental effects of inadequate night-time sleep or, as ‘siestas’, may form an integral part of personal sleep-wake schedules. Napping may also precipitate or perpetuate insomnia symptoms through the erosion of homeostatic sleep pressure at night. Napping for too long during the day can reduce your sleep drive at night, making it difficult to fall asleep or stay asleep. Naps that are too short or too long may result in poor sleep quality. Short naps may not provide the restorative benefits of a full sleep cycle, while long naps can cause sleep inertia, a groggy feeling upon waking that may interfere with nighttime sleep.</div>
            <div>
                <div className='numbers'><span>2</span> <span>Avoid alcohol</span></div>
            </div>
            <div className='textttt' id='alcohol'>The biggest problem that alcohol causes is insomnia. After a few hours of sleep, alcohol can cause you to wake up and have a difficult time going back to sleep. Alcohol also has a negative effect on Rapid Eye Movement (REM) sleep. “REM sleep is the deepest sleep, where you have your most vivid dreams,” says Dr. Iatridis.  “It’s probably the most restorative sleep. And alcohol can reduce the amount of REM sleep you have at night.” It’s important to stop drinking at least 4 hours before bed to prevent sleep disruption. People don’t do that, but that would be optimal. And when you go out, you want to limit yourself to no more than a couple of drinks. What’s considered a reasonable amount of alcohol is two drinks a night for a male and one drink a night for a female.  There’s some evidence that alcohol actually disrupts the release of melatonin in your brain. Melatonin is the hormone that your brain releases when it wants to go to sleep.  As a result, people who drink alcohol tend to have very broken sleep and don’t sleep well. They also wake up in the morning not feeling as rested as they should. The key is to drink in moderation and give yourself time before going to bed so the alcohol can clear your system.
            </div>

            <div>
                <div className='numbers'><span>3</span> <span>Avoid caffeine</span></div>
            </div>
            <div className='textttt' id='caffeine'>When you feel tired during the day, it’s tempting to reach for a quick jolt of caffeine from a cup of coffee or an energy shot. But doing so might also inadvertently disrupt your sleep later that night. Although caffeine undoubtedly provides a boost of energy, its effects are temporary—and, research shows, may interfere with sleep quality. Disrupted sleep, in turn, may lead to more caffeine intake the next day— kicking off a vicious cycle. It’s also important to remember that the greater your caffeine intake, the greater the likelihood of caffeine disrupting your sleep quality. Instead of ramping up your caffeine to feel awake, try prioritizing sleep duration and quality to help reduce tiredness. Achieving recommended amounts of sleep is linked to improved mood, better cognitive function, and decreased risk of chronic disease. Before going for caffeine to combat an afternoon lull, try creating a better sleep routine to improve your sleep hygiene. This includes setting a bedtime alarm to give yourself enough time for adequate sleep duration and developing a nighttime routine to help improve your sleep quality—such as putting away electronic devices at least one hour before lights out, engaging in a relaxing activity, like reading, and focusing on healthy nighttime practices like hydrating and brushing your teeth.
            </div>

            <div>
                <div className='numbers'><span>4</span> <span>Avoid smoking cigarettes</span></div>
            </div>
            <div className='textttt' id='smoke'>Did you know smoking cigarettes can impact your sleep? Potential problems include sleep fragmentation, insomnia, snoring, and sleep apnea. Nicotine disrupts sleep – and smoking can also raise the risk of developing sleep conditions, such as sleep apnea. But since nicotine is a stimulant, smoking can mask your exhaustion.
                Sleep issues associated with cigarette smoking, as well as puffing on cigars and pipes, are largely attributed to nicotine, which is the active ingredient in tobacco products. Some people claim smoking makes them sleepy. Given nicotine may relieve anxiety and induce relaxation.
                Simultaneously, however, nicotine has stimulant properties that are thought to be responsible for insomnia and other potential sleep problems associated with smoking.
                First, based on how dependent you are on tobacco and how often you smoke, your cravings for nicotine may be strong enough to interrupt your sleep or cause you to be unable to fall asleep. Because nicotine is a stimulant, it also can contribute to problems falling asleep if used too close to bedtime.
                Smoking is associated with a disruption of the basic structure of sleep called sleep architecture. This is the pattern of sleep stages that occur during the night.
                For some people who quit smoking, these differences in sleep architecture appear to become more typical over time. It should be noted, however, that those who have never smoked seem to have better sleep quality overall.
            </div>

            <div>
                <div className='numbers'><span>5</span> <span>Try not to eat too late</span></div>
            </div>
            <div className='textttt' id='eating'>
                <p style={{ textIndent: '20px' }}>Eating and sleeping are two essential activities for health and wellbeing. Food gives people the energy they need for daily life, while sleep helps their bodies rest and recover. Knowing how the body handles food at night can help people make informed choices about bedtime snacking. Eating too much close to bedtime can affect sleep quality.</p>
                <p style={{ textIndent: '20px' }}>Research shows that eating high-calorie meals with large amounts of fat or carbohydrates less than an hour before bedtime can extend the time it takes to fall asleep. By contrast, eating meals high in carbohydrates at least four hours before bedtime can decrease the time spent awake in bed before sleeping. Eating right before bed can also make a person wake up in the middle of the night.</p>
                <p style={{ textIndent: '20px' }}>One study found that participants who ate or drank less than an hour before going to bed were much more likely to wake up after falling asleep than people who consumed something two or more hours before bedtime. Although a full meal is not recommended near bedtime, a light snack may curb hunger in the evening.</p>
                <p style={{ textIndent: '20px' }}>However, some foods can trigger heartburn and other discomfort, while other foods and beverages may make it harder to fall asleep or stay asleep. Suggested foods to avoid near bedtime include: Spicy foods, Foods high in fat, such as fried foods, full-fat dairy products, and fatty meats ,Acidic foods, such as tomatoes and citrus fruits etc.</p>
                <p style={{ textIndent: '20px' }}>On the other hand, researchers have found that some foods may help people sleep, such as Tart cherry juice,  Kiwi,  Walnuts, almonds, and other nuts, Milk and powdered milk. </p>

                FUN FACT: In the past, the idea that eating before bed is bad was a widespread belief. Many thought that late-night meals or snacks could lead to weight gain and related diseases. But newer evidence is showing a more complex picture of nighttime eating. Recent studies suggest that eating a small portion of nutrient-dense foods at night can actually have positive effects on the body.
            </div>

            <div>
                <div className='numbers'><span>6</span> <span>Limit screen time before bed</span></div>
            </div>
            <div className='textttt' id='screen'>
                <p style={{ textIndent: '20px' }}>The majority of teenagers bring some kind of technology into the bedroom, adding to the amount of screen time they get each day and affecting multiple areas of their lives. Experts are becoming increasingly concerned about the effects of blue light from these electronic devices on the sleep-wake cycle. An estimated 2 in 3 teenagers regularly sleep less than the recommended amount, and screen time may be responsible for sleep deprivation and other problems.</p>
                HOW DO SCREENS AFFECT THE SLEEP-WAKE CYCLE?<br></br>
                The human sleep-wake cycle is a circadian rhythm that mostly takes cues from sunlight. When it is bright outside, people become more alert. When it becomes dark, the body produces a hormone called melatonin that induces sleepiness.
                Smartphones, tablets, computers, television screens, and some e-readers give off short-wavelength blue light that is very similar to sunlight. Not only does this light make people more alert, it also deceives the body into thinking it is still daytime.
                In response, the body produces less melatonin, interfering with the body’s natural sleep-wake cycle. The longer you spend on your screen, the greater the consequences for your sleep.
                <br></br><br></br>
                Screen time is linked to a host of insomnia symptoms in teenagers. By delaying the release of melatonin, screen time lengthens the time it takes to fall asleep and leads to less restful sleep overall.  Over time, consistently late weekday bedtimes and catch-up sleep on the weekend disrupt the circadian rhythm.



                <p style={{ textIndent: '20px' }}>In addition to suppressing melatonin levels, screen time for teens may directly reduce sleep time. Engaging in exciting content before bedtime or using social media can boost alertness and impede sleepiness. Alertness and melatonin levels can also be affected by passive technology, such as a television running in the background or a smartphone that emits sounds, vibrations, and light.</p>

                <p style={{ textIndent: '20px' }}>There is some debate about if screen time actually causes insomnia in teens, or if teens who have trouble sleeping are more likely to use screens at night. To make matters more complicated, excessive mobile phone use has been linked to symptoms of depression and anxiety , which are additional risk factors for insomnia. It may be that sleep, screen time, and negative emotions interact to exacerbate unhealthy behaviors.</p>

                The prevailing opinion among health experts is that screen time has a greater effect on insomnia than vice-versa. Studies show that 57% of teens who use technology in the bedroom suffer from sleep problems, and teens consistently report worse sleep when they have a television or small screen , such as a smartphone, in the bedroom.
            </div>

            <div>
                <div className='numbers'><span>7</span> <span>Maintain a healthy lifestyle</span></div>
            </div>
            <div className='textttt' id='healthy'>
                <p style={{ textIndent: '20px' }}>Studies have found that proper exercise can alleviate sleep-related problems and help you get an adequate amount of rest. Recent research also suggests insufficient or poor-quality sleep can lead to lower levels of physical activity the following day. For these reasons, experts today believe sleep and exercise have a bidirectional relationship. </p>

                Optimizing your exercise routine can potentially help you sleep better, and getting an adequate amount of sleep may promote healthier physical activity levels during the day.

                <p style={{ textIndent: '20px' }}>
                    Exercising  improves sleep for many people. Specifically, moderate to vigorous exercise can increase sleep quality for adults by reducing sleep onset – or the time it takes to fall asleep – and decrease the amount of time they lie awake in bed during the night. Additionally, physical activity can help alleviate daytime sleepiness and, for some people, reduce the need for sleep medications.Exercise can also improve sleep in indirect ways. For instance, moderate to vigorous physical activity can decrease the risk of excessive weight gain, which in turn makes that person less likely to experience symptoms of obstructive sleep apnea (OSA). Roughly 60% of moderate to severe OSA cases have been attributed to obesity, though the relationship between weight and sleep apnea is complex. </p>
                <p style={{ textIndent: '20px' }}>
                    Survey results among people who exercise late at night have been variable, so you should base your exercise times and intensity on what best suits your sleep schedule. Certain exercises may be more beneficial for sleep than others. These include yoga, light stretching, and breathing exercises.<br></br>

                    One survey found that the majority of people who exercise at 8 p.m. or later fall asleep quickly, experience an adequate amount of deep sleep, and wake up feeling well rested. Those who exercise between 4 p.m. and 8 p.m. reported similar percentages for these categories, suggesting late-night exercise may actually benefit some people.<br></br>

                    Other studies have yielded similar results. In one, people who exercised in the evening experienced more slow-wave sleep and increased latency for rapid eye movement sleep compared to the control group, as well as less stage 1 (or light) sleep. So while exercising before bedtime may not be inherently harmful, vigorous workouts in the hour leading up to bed can affect sleep efficiency and total sleep time.</p>
            </div>

            <div>
                <div className='numbers'><span>8</span> <span>Have a consistent sleep schedule</span></div>
            </div>
            <div className='textttt' id='schedule'>
                <p style={{ textIndent: '20px' }}>Research suggests that maintaining a consistent sleep schedule can help you get better quality rest (and more of it). The practice is also associated with healthier body composition (especially in elderly individuals) and a lower risk of heart disease. Why?</p>

                One reason: A consistent sleep schedule helps to maintain the body’s internal clock, or circadian rhythm. And heart rate, blood pressure, and other cardiovascular functions follow circadian patterns. <br></br><br></br>
                <p style={{ textIndent: '20px' }}>
                    Creating a solid sleep schedule — whether it’s strict or not — invites better quality rest, which then leads to better overall health. Those who get adequate shuteye tend to have improved learning, an easier time making decisions, better emotional well-being, boosted moods, lower risk of diseases, better immune function, and increased performance compared to those with sleep deficiencies.

                    The schedule that works best for you and your body is based on your chronotype, or biological preference for mornings or evenings. </p>

                In other words, being a “morning person” or a “night owl” is basically in your DNA. Even if you’re at the wrong chrono-typical schedule, but you’re consistent, it’s better than being wildly inconsistent.

                This chronotype-dependent schedule is also based on when you naturally produce more of the hormone melatonin, which gets you into rest mode, and less of the hormone cortisol, which can disrupt sleep.
            </div>

            <div>
                <div className='numbers'><span>9</span> <span>Еat healthy food</span></div>
            </div>
            <div className='textttt' id='food'>
                <p style={{ textIndent: '20px' }}>It’s no secret that both nutrition and sleep play a fundamental role in our health, but the complex and important relationships between them are frequently overlooked.

                    Diet and nutrition can influence the quality of your sleep, and certain foods and drinks can make it easier or harder to get the sleep that you need. At the same time, getting enough sleep is associated with maintaining a healthier body weight and can be beneficial for people who are trying to lose weight.

                    Recognizing the connections between sleep and nutrition creates opportunities to optimize both in order to eat smarter, sleep better, and live a healthier life. </p>

                “You are what you eat” may be a cliche, but it reflects the fact that nutrition serves as a backbone for health, providing the energy we need and other inputs that make the body function properly. The links between nutrition and obesity, diabetes, and heart health  are well-known, but many people are unaware that their diet can also affect sleep.

                As a general rule, a balanced diet made up largely of a variety of vegetables and fruits is able to provide broad range of vitamins and minerals, contributing to better sleep while promoting a healthy weight.

                Growing evidence indicates that sufficient nutrient consumption is important for sleep. One large study found a lack of key nutrients, such as calcium, magnesium, and vitamins A, C, D, E, and K to be associated with sleep problems.

                Many different types of diets can offer this kind of nutritional balance, and some have been evaluated more closely for how they affect sleep. For example, the Mediterranean Diet , which is plant-based while incorporating lean meats and high-fiber foods, has been found to improve heart health and sleep quality . Further research will be necessary to identify the sleep benefits of different diets and to test the comparative effects of those diets on sleep.
            </div>

            <div>
                <div className='numbers'><span>10</span> <span>Meditate</span></div>
            </div>
            <div className='textttt' id='meditate'>
                <p style={{ textIndent: '20px' }}>Many people know the feeling of being unable to sleep due to stress. Once sleep problems begin, they can also trigger anxiety around the idea of bedtime, making it even more difficult to fall asleep. Meditation is one technique that people can use to relieve stress at bedtime and fall asleep more easily.


                    On a mental level, meditation techniques are intended to promote a more relaxed response to a person’s stressful thoughts and feelings. Meditation styles often incorporate the idea of mindfulness , or a focus on the present moment with an open, non-judgmental mindset. Meditation may also incorporate concentrating on a repeated phrase, a visual image, a sound, or a sensation, such as breathing, to help reduce distractions. </p>

                Meditation is also designed to trigger a physical relaxation response that counteracts the stress response. The stress response, or fight-or-flight response, involves sweating, a rapid heart rate, faster breathing, tense muscles, and increased blood pressure, which are not conducive to sleep. The relaxation response calms breathing, reduces heart rate and blood pressure, and slows brain waves.

                Mindfulness and meditation likely help people sleep via several different pathways: slowed breathing, calmed stress pathways, improved mental outlook, better managed pain.
                Up to one year after participating in a meditation program, many participants still experience better sleep quality. Researchers believe this may be due to changes to connections in the brain, changes to the way a person moves through sleep stages, and the practice of mental techniques that decrease sleep-disrupting thoughts.
            </div>

            <div>
                <div className='numbers'><span>11</span> <span>Do yoga</span></div>
            </div>
            <div className='textttt' id='yoga'>
                <p style={{ textIndent: '20px' }}>Yoga is a form of meditative movement that combines attentiveness and focused breathing with physical exercise. There are many positive effects yoga can have on wellness , including improved mental and emotional health and stress, relief of some types of pain, weight loss, and improved sleep. This article focuses on the relationship between yoga and better sleep. </p>

                Over 55% of yoga practitioners report improved sleep and over 85% report reduced stress. Many studies demonstrate that yoga can improve sleep for a variety of different populations. These studies typically focus on one’s quality of sleep rather than the quantity, as increased amounts of sleep do not necessarily correlate with quality sleep and overall wellbeing. While the definition of quality sleep varies among sleepers, it usually includes feeling energized for the day and a lack of disturbances.Yoga has been shown to help benefit all age ranges and improve sleep. From children to the elderly, yoga provides numerous health and sleep benefits. Occasional yoga practice will likely improve sleep quality more than no practice at all. However, regular, long-term practitioners experience better sleep quality.
            </div>

            <div>
                <div className='numbers'><span>12</span> <span>Don't take your worries to bed</span></div>
            </div>
            <div className='textttt' id='worries'>
                <p style={{ textIndent: '20px' }}>Anxiety and worries are frequently connected to sleeping problems. Excess worry and fear make it harder to fall asleep and stay asleep through the night. Sleep deprivation can worsen anxiety, spurring a negative cycle involving insomnia and anxiety disorders.

                    Anxiety disorders are the most common mental health problem in the United States, and insufficient sleep is known to have sweeping negative implications for overall health. As a result, understanding and addressing the links between anxiety and sleep can be fundamental to physical and emotional wellness. </p>

                In fact, a state of mental hyperarousal, frequently marked by worry, has been identified as a key factor behind insomnia. People with anxiety disorders are inclined to have higher sleep reactivity, which means they are much more likely to have sleeping problems when facing stress.

                Trying relaxation techniques can help identify ways to get rid of worries and make it easier to fall asleep quickly and peacefully. Relaxation exercises may be a component of CBT (Cognitive Behavioural Therapy) and can break the cycle of worry and rumination.

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

        </div >
    )
}
