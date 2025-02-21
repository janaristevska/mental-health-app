import React, { useState, useEffect } from 'react'
import '../styles/TipsDepression.css';
import enj from '../images/enj.png';
import act from '../images/act.png';
import massage from '../images/massage.png';
import face from '../images/face.png';
import medi from '../images/medi.png';
import fam from '../images/fam.png';
import sport from '../images/sport.png';
import cntrl from '../images/cntrl.png';
import post from '../images/post.png';
import sl from '../images/sl.png';
import msc from '../images/msc.png';
import yoga from '../images/yoga.png';
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
        <div className='depression-tips-container'>
            <p className='hrr'>Tips to Prevent Depression</p>
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
                        <img src={enj}></img>
                        <div className='npr'><span>1</span> <span> Do things you enjoy</span></div>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink
                        to="active"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={-250}
                        className={location.pathname === '/about' ? 'activeLink' : ''}
                    >
                        <img src={act}></img>
                        <div className='npr'><span>2</span> <span>Be more active</span></div>
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
                        <img src={massage}></img>
                        <div className='npr'><span>3</span> <span>Massage treatments</span></div>
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
                        <img src={face}></img>
                        <div className='npr'><span>4</span> <span>Face your fears</span></div>
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
                        <img src={medi}></img>
                        <div className='npr'><span>5</span> <span>Meditation</span></div>
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
                        <img src={fam}></img>
                        <div className='npr'><span>6</span> <span>Keep in touch with family and friends</span></div>
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
                        <div className='npr'><span>7</span> <span> Practice your hobbies</span></div>
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
                        <img src={cntrl}></img>
                        <div className='npr'><span>8</span> <span>Learn to let things go that you cannot control</span></div>
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
                        <img src={post}></img>
                        <div className='npr'><span>9</span> <span>Keep your mind busy with positive thoughts</span></div>
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
                        <img src={sl}></img>
                        <div className='npr'><span>10</span> <span>Get plenty of sleep</span></div>
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
                        <img src={msc}></img>
                        <div className='npr'><span>11</span> <span>Play on some music</span></div>
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
                        <img src={yoga}></img>
                        <div className='npr'><span>12</span> <span>Yoga</span></div>
                    </ScrollLink>
                </div>
            </div>

            <div>
                <div className='numbers'><span>1</span> <span>Do things you enjoy</span></div>
            </div>
            <div className='textttt' id='nap'>Spending time on an activity that you enjoy can improve your mental health and wellbeing. In fact, people with hobbies may be less likely to experience stress, low mood, and depression. Activities that get you out and about can make you feel happier and more relaxed. Engaging in enjoyable activities can provide a distraction from negative thoughts and feelings associated with depression. This distraction can provide relief and improve mood. Some enjoyable activities, such as exercise or creative hobbies, can trigger the release of endorphins, which are natural mood lifters. This can help reduce feelings of sadness and improve overall well-being. Accomplishing something you enjoy, even if it's a small task, can boost your self-esteem and sense of accomplishment, which can be especially important when dealing with depression.</div>
            <div>
                <div className='numbers'><span>2</span> <span>Be more active</span></div>
            </div>
            <div className='textttt' id='alcohol'>Take up some form of exercise. There's evidence that exercise can help lift your mood. If you haven't exercised for a while, start gently by walking for 20 minutes every day. Being depressed can leave you feeling low in energy, which might put you off being more active.

                Regular exercise can boost your mood if you have depression, and it's especially useful for people with mild to moderate depression.

                Any type of exercise is useful, as long as it suits you and you do enough of it. Exercise should be something you enjoy; otherwise, it will be hard to find the motivation to do it regularly. To stay healthy, adults should do 150 minutes of moderate-intensity activity every week. If you have not exercised for a while, start gradually and aim to build up towards achieving 150 minutes a week.

                Any exercise is better than none and even a brisk 10-minute walk can clear your mind and help you relax.  Find an activity you can do regularly. You can take part in a team sport, attend classes at a leisure centre, or just be more active in your daily routine by walking or cycling instead of travelling by car or public transport.

            </div>

            <div>
                <div className='numbers'><span>3</span> <span>Massage treatments</span></div>
            </div>
            <div className='textttt' id='caffeine'>Have you ever gotten a massage and felt an instant mood lift? That might be because massage has been linked to fighting depression, at least for those that have sought out a massage for depression.
                Massage therapy is one of many ways to cope with stress, and treat anxiety and depression. If you experience depression or anxiety, or are just overloaded with extra stress, massage can be an effective part of treatment. It can create a sense of relief and empowerment, and allow you to focus on your mind-body connection.
                During massage therapy, a therapist will manipulate your muscles and other soft tissues to enhance their function, promote relaxation, or both.

                Massage therapy has been used in China for more than 3,000 years. They suggest that touch releases hormones in your body that create a sense of emotional connection. Massage may help calm your mind and improve your mood, as well as ease physical aches and pains. When your muscles and connective tissues become stiff or rigid, it can cause pain and limit your movement. Massage therapy can help relieve this tension in your muscles and connective tissues. It also increases your blood flow and promotes relaxation.

                Many individuals with depression struggle with sleep disturbances. Massage therapy can promote better sleep quality by relaxing the body and mind, leading to improved overall well-being.

                A one-hour massage lowers cortisol in your body while also releasing serotonin. This hormone neurotransmitter is sometimes called the "happy chemical" because it reduces feelings of depression and carries signals between nerves and your body. By lowering cortisol and increasing serotonin, you're boosting your body's ability to fight off pain, anxiety and feelings of sadness.

            </div>

            <div>
                <div className='numbers'><span>4</span> <span>Face your fears</span></div>
            </div>
            <div className='textttt' id='smoke'>Don't avoid the things you find difficult. When people feel low or anxious, they sometimes avoid talking to other people. Some people can lose their confidence in going out, driving or travelling.

                If this starts to happen, facing up to these situations will help them become easier. Facing your fears can be a very hard thing to do. But sometimes it is the best way to deal with feelings of depression. The key is to gently push yourself to do things that take you a little way out of your ‘comfort zone’. Gradually, you increase your exposure until you can tolerate the uncomfortable emotions, such as fear, anxiety and distress. This is a type of ‘exposure therapy’ — a psychological treatment that helps people confront their fears.

                It’s not about putting yourself in dangerous situations, but about learning to cope with irrational fears.


            </div>

            <div>
                <div className='numbers'><span>5</span> <span>Meditation</span></div>
            </div>
            <div className='textttt' id='eating'>
                Meditation may not make all the symptoms of depression disappear but will help you manage them. It works by changing how your brain reacts to stress and anxiety. When you meditate, you can override the triggers stimulated from the prefrontal cortex and the amygdala. This explains why your stress levels fall.

                Meditation protects the hippocampus. The hippocampus is for memory and learning. When you meditate for 30 minutes daily for eight weeks, you help your brain increase the grey matter in this area. Research shows people with recurrent depressive episodes have a smaller hippocampus.
                Mindfulness meditation might be considered the mother of all meditation. Many other types of meditation have stemmed from mindfulness, and it may have the most scientific evidence supporting it.

                "Mindfulness meditation is a moment-to-moment awareness of the present moment," said Dr. Nerurkar. "It uses your breath to create an anchor to keep bringing your attention back to the present moment and help with cognitive retraining."

                Studies have shown that mindfulness meditation may reduce depression, anxiety, and stress. In one review of studies involving over 3000 participants, researchers found that mindfulness-based interventions were associated with reductions in the severity of anxiety in adults with cancer up to six months after delivery of mindfulness sessions compared with usual care, waitlist control, or no intervention.

            </div>

            <div>
                <div className='numbers'><span>6</span> <span>Keep in touch with family and friends</span></div>
            </div>
            <div className='textttt' id='screen'>
                People who spend time with family and friends find healthier ways to cope with depression. A study found that people use their family and friends as a depression buffer, talking about their problems instead of seeking negative coping mechanisms like drinking alcohol, smoking or doing drugs.
                Interacting with friends and family members helps combat loneliness, as it provides a sense of belonging and purpose. Loneliness can exacerbate depressive symptoms, so maintaining social connections can be protective.
                Spending time with loved ones can serve as a distraction from negative thoughts and feelings associated with depression. Engaging in enjoyable activities or simply having fun with friends and family can boost mood and reduce depressive symptoms.
            </div>

            <div>
                <div className='numbers'><span>7</span> <span>Practice your hobbies</span></div>
            </div>
            <div className='textttt' id='healthy'>
                Hobbies can divert your attention away from negative and intrusive thoughts associated with depression. When you're engrossed in a hobby, you're less likely to ruminate on your problems.
                Hobbies often involve setting goals and achieving them. This can boost your self-esteem and provide a sense of accomplishment, counteracting feelings of worthlessness or hopelessness that are common in depression.
                Engaging in activities you enjoy can trigger the release of neurotransmitters like dopamine, which are associated with feelings of pleasure and reward. This can improve your mood and reduce symptoms of depression.
            </div>

            <div>
                <div className='numbers'><span>8</span> <span>Learn to let things go that you cannot control</span></div>
            </div>
            <div className='textttt' id='schedule'>
                Constantly worrying about things beyond your control can lead to chronic stress and anxiety, both of which are closely linked to depression. By letting go, you can reduce the mental and emotional burden associated with these concerns.
                Letting go often involves being present in the moment and accepting things as they are. This is a key aspect of mindfulness, which has been shown to be effective in reducing depressive symptoms.
            </div>

            <div>
                <div className='numbers'><span>9</span> <span> Keep your mind busy with positive thoughts</span></div>
            </div>
            <div className='textttt' id='food'>
                Depression often involves persistent negative thinking patterns. Actively engaging in positive thoughts can shift your focus away from these negative thought patterns, reducing their impact on your mood.
                Positive thinking encourages a more optimistic outlook on life. It can help you see opportunities and solutions rather than dwelling on problems and obstacles.
                When you have a more positive outlook, it can improve your interactions with others. Positivity tends to be contagious and can foster healthier, more supportive relationships.
                Focusing on positive aspects of yourself and your life can boost your self-esteem and self-worth, counteracting the negative self-perception that is common in depression.

            </div>

            <div>
                <div className='numbers'><span>10</span> <span>Get plenty of sleep</span></div>
            </div>
            <div className='textttt' id='meditate'>
                Sleep is essential for regulating emotions. When you're sleep-deprived, you're more likely to experience mood swings, irritability, and increased vulnerability to depressive symptoms.
                Sleep helps regulate hormones that influence mood, including cortisol and serotonin. Adequate sleep supports a balanced hormonal system, which is essential for emotional stability.
                Sleep is crucial for stress recovery. It allows your body and mind to recuperate from daily stressors, making you better equipped to cope with life's challenges and reducing the risk of depressive symptoms related to stress.
            </div>

            <div>
                <div className='numbers'><span>11</span> <span>Play on some music</span></div>
            </div>
            <div className='textttt' id='yoga'>
                Music provides a powerful medium for emotional expression. When you play music, you can channel your emotions into your playing or singing, allowing you to express and release pent-up feelings. This emotional catharsis can be therapeutic and provide relief from depressive symptoms.
                Engaging with music can serve as a positive distraction from negative thoughts and feelings associated with depression. It shifts your focus away from distressing emotions and encourages you to immerse yourself in the music-making process.
                Music can have a calming effect on the mind and body. Playing soothing or relaxing music can reduce stress and anxiety, which are often associated with depression.
            </div>

            <div>
                <div className='numbers'><span>12</span> <span>Yoga</span></div>
            </div>
            <div className='textttt' id='worries' style={{ marginBottom: '50px' }}>
                Yoga encourages relaxation and reduces the physiological and psychological effects of stress. Regular practice can lower cortisol levels, leading to decreased feelings of anxiety and tension often associated with depression.
                Yoga can improve emotional regulation by helping you become more aware of your emotions and responses to stressors. It provides tools to manage intense emotions and reduce emotional reactivity.
                Yoga incorporates various relaxation techniques, such as deep breathing and progressive muscle relaxation, which can help alleviate anxiety and promote a sense of calm.
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
