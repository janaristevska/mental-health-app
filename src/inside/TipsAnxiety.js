import React, { useState } from 'react'
import '../styles/TipsInsomnia.css';
import '../styles/TipsAnxiety.css';
import brth from '../images/brth.png';
import msc from '../images/msc.png';
import caff from '../images/cafff.png';
import smoke from '../images/smokee.png';
import sport from '../images/sport.png';
import medi from '../images/medi.png';
import yoga from '../images/yoga.png';
import sleep from '../images/sleep.png';
import cook from '../images/cook.png';
import painting from '../images/painting.png';
import pet from '../images/pet.png';
import naturee from '../images/naturee.png';
import { useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink and scroll

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
    return (
        <div className='anxiety-tips-container'>
            <p className='hrr'>Tips to Prevent Anxiety</p>
            <p style={{ color: 'black', fontWeight: 'bold', marginLeft: '575px', fontSize: '30px' }}>Countdown to take control of anxiety</p>
            <div className='help-container'>
                <p>Start by breathing deeply in through your nose, and out through your mouth. Then, slowly bring awareness to: </p>
                <div className='hlpc'>
                    <p><span style={{ fontSize: '20px', fontWeight: 'bold' }}>5</span> Things you can see (Your hands, the sky, a plant on your colleague's desk)</p>
                    <p><span style={{ fontSize: '20px', fontWeight: 'bold' }}>4</span> Things you can touch (Your feet on the ground, a ball, your friend's hand)</p>
                    <p><span style={{ fontSize: '20px', fontWeight: 'bold' }}>3</span> Things you can hear (The wind blowing, children's laughter, your breath)</p>
                    <p><span style={{ fontSize: '20px', fontWeight: 'bold' }}>2</span> Things you can smell (Fresh-cut grass, coffee, soap)</p>
                    <p><span style={{ fontSize: '20px', fontWeight: 'bold' }}>1</span> Emotion you can feel (TASTE)? (A mint, gum, the fresh air)</p>
                </div>
                <div style={{ color: 'black', marginLeft: '155px', width: '1000px', marginTop: '25px', textAlign: 'justify', fontSize: '20px' }}>This is called grounding, it helps when you've gone too far in your own head and lost all control of your surroundings.
                    This exercise helps you shift your focus to your surroundings in the present moment and away from what is causing you to feel anxious. It can help interrupt unhealthy thought patterns.
                </div>
            </div>
            <div className='333rule'>
                <p style={{ color: 'black', fontWeight: 'bold', marginLeft: '690px', marginTop: '25px', fontSize: '30px' }}>The 333 rule anxiety</p>
                <p style={{ color: 'black', marginLeft: '350px', width: '1000px', textAlign: 'justify', fontSize: '20px' }}>The 333 rule for anxiety is an easy technique to remember and use in the moment if something is triggering your anxiety.

                    It involves looking around your environment to identify three objects and three sounds, then moving three body parts. Many people find this strategy helps focus and ground them when anxiety overwhelms them.</p>
            </div>
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
                        <img src={brth}></img>
                        <div className='npr'><span style={{ color: 'black' }}>1</span> <span >Practice breathing exercises</span></div>
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
                        <img src={msc}></img>
                        <div className='npr'><span style={{ color: 'black' }}>2</span> <span style={{ color: 'black' }}>Put on some music</span></div>
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
                        <div className='npr'><span style={{ color: 'black' }}>3</span> <span style={{ color: 'black' }}>Avoid caffeine</span></div>
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
                        <div className='npr'><span style={{ color: 'black' }}>4</span> <span style={{ color: 'black' }}>Avoid smoking cigarettes</span></div>
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
                        <img src={sleep}></img>
                        <div className='npr'><span style={{ color: 'black' }}>5</span> <span style={{ color: 'black' }}>Take care of your sleeping routine</span></div>
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
                        <img src={cook}></img>
                        <div className='npr'><span style={{ color: 'black' }}>6</span> <span style={{ color: 'black' }}>Cook</span></div>
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
                        <div className='npr'><span style={{ color: 'black' }}>7</span> <span style={{ color: 'black' }}>Maintain a healthy lifestyle</span></div>
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
                        <img src={painting}></img>
                        <div className='npr'><span style={{ color: 'black' }}>8</span> <span style={{ color: 'black' }}>Painting</span></div>
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
                        <img src={pet}></img>
                        <div className='npr'><span style={{ color: 'black' }}>9</span> <span style={{ color: 'black' }}>Spending time with pet and animals</span></div>
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
                        <div className='npr'><span style={{ color: 'black' }}>10</span> <span style={{ color: 'black' }}>Meditate</span></div>
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
                        <div className='npr'><span style={{ color: 'black' }}>11</span> <span style={{ color: 'black' }}>Do yoga</span></div>
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
                        <img src={naturee}></img>
                        <div className='npr'><span style={{ color: 'black' }}>12</span> <span style={{ color: 'black' }}>Spend time in nature </span></div>
                    </ScrollLink>
                </div>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>1</span> <span style={{ color: 'black' }}>Practice breathing exercises</span></div>
            </div>
            <div className='textttt' id='nap' style={{ color: 'black' }}>Deep, controlled breathing activates the body's relaxation response, which is the opposite of the stress response. When you breathe deeply and rhythmically, it signals to your body that you are safe and can help counteract the physiological effects of anxiety.: Deep breathing stimulates the parasympathetic nervous system, responsible for rest and relaxation. This counteracts the effects of the sympathetic nervous system, which is activated during anxiety, and helps reduce symptoms like rapid heartbeat and shallow breathing. Focusing on your breath during a breathing exercise redirects your attention away from anxious thoughts and worries. This can help break the cycle of rumination and promote mindfulness, allowing you to stay present in the moment.eep breathing can help relax tense muscles, which are common during episodes of anxiety. This physical relaxation can, in turn, signal to the brain that it's safe to calm down.</div>
            <div>
                <div className='numbers'><span style={{ color: 'black' }}>2</span> <span style={{ color: 'black' }}>Put on some music</span></div>
            </div>
            <div className='textttt' id='alcohol' style={{ color: 'black' }}>Music can divert your attention away from anxious thoughts and worries, offering a temporary break from stressors. This shift in focus can help reduce rumination and promote a more positive mindset. Music has the power to convey and evoke emotions. Listening to music that resonates with your emotions can provide an outlet for expressing feelings you may not easily put into words, reducing emotional tension and providing a sense of release. Certain types of music, such as calming or uplifting melodies, can positively impact mood by triggering the release of endorphins and other feel-good neurotransmitters. This can lead to an improved sense of well-being and reduced anxiety. mmersing yourself in music can promote mindfulness by encouraging you to be fully present in the auditory experience. This mindful state can help reduce anxiety by redirecting your attention away from worries about the future or past.
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>3</span> <span style={{ color: 'black' }}>Avoid caffeine</span></div>
            </div>
            <div className='textttt' id='caffeine' style={{ color: 'black' }}>Caffeine stimulates the central nervous system, leading to an increase in heart rate. For people prone to anxiety, this elevated heart rate can mimic the physical symptoms of anxiety, such as palpitations, which can trigger or intensify anxiety.Caffeine can cause restlessness, nervousness, and jitteriness. These feelings can worsen anxiety and make it difficult for individuals to relax.Caffeine can disrupt sleep patterns, leading to insomnia or poor-quality sleep. Sleep problems are closely linked to anxiety, and a lack of restorative sleep can increase feelings of anxiety and stress.Caffeine can temporarily raise blood pressure, and this increase in blood pressure can exacerbate feelings of anxiety, especially in individuals with hypertension or those prone to stress-related blood pressure spikes. Caffeine can affect mood by altering neurotransmitter levels in the brain. In some individuals, this may lead to increased irritability or mood swings, which can contribute to anxiety.
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>4</span > <span style={{ color: 'black' }}>Avoid smoking cigarettes</span></div>
            </div>
            <div className='textttt' id='smoke' style={{ color: 'black' }}>Nicotine, the primary addictive substance in cigarettes, is a stimulant that temporarily increases alertness and concentration. While this can provide a sense of relief for some individuals, it also leads to withdrawal symptoms between cigarettes, including increased anxiety and restlessness. These symptoms can create a cycle of dependence, where smoking becomes a way to manage anxiety, but also contributes to its perpetuation.Smoking causes an immediate increase in heart rate and blood pressure. Over time, this can lead to chronic hypertension, which is a risk factor for anxiety disorders. Elevated heart rate can also mimic the physical symptoms of anxiety, making it difficult to distinguish between the effects of nicotine and actual anxiety.: Nicotine is a stimulant that can interfere with sleep patterns, leading to difficulties falling asleep and staying asleep. Poor-quality sleep can increase feelings of anxiety and stress. Quitting smoking can lead to better sleep, which in turn can help reduce anxiety.
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>5</span> <span style={{ color: 'black' }}>Take care of your sleeping routine</span></div>
            </div>
            <div className='textttt' id='eating'>
                <p style={{ textIndent: '20px', color: 'black' }}>One of the best ways to reduce anxiety and improve sleep health is to have a set bedtime routine. A bedtime routine allows for healthy sleep habits to become part of our life and reduces our stress levels. That’s because when you have a routine, your body knows what to expect. And when your body knows what to expect, it’s easier to relax.</p>
                <p style={{ textIndent: '20px', color: 'black' }}>A good night’s sleep is essential for our physical and mental health. Whether it’s chronic anxiety or acute anxiety, the effects of anxiety on our sleep can be profound. </p>
                <p style={{ textIndent: '20px', color: 'black' }}>Not getting enough quality sleep can have a major impact on our overall health and well-being. When we don’t get enough sleep, we’re more likely to suffer from physical health problems, mental health problems, and impaired cognitive function. Additionally, lack of sleep can affect our mood, energy levels, and ability to concentrate.</p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>6</span> <span style={{ color: 'black' }}>Cooking</span></div>
            </div>
            <div className='textttt' id='screen'>
                <p style={{ textIndent: '20px', color: 'black' }}>Cooking is an excellent therapy activity for those who are struggling with anxiety or depression, as it is a co-mindful experience. Not only is it a positive and celebrative process that brings people together, but you must pay and give attention to the food. Cooking requires focus and is best without multi-tasking. Whilst cooking, you are able to naturally take your mind off of your day-to-today worries. Take frying an egg as an example. You have to look after and nurture that egg to make sure it cooks exactly how you want it. You can’t be distracted by your phone or any other device, as you might burn it. Cooking can save you from drowning in thoughts that are making your situation worse. </p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>7</span> <span style={{ color: 'black' }}>Maintain a healthy lifestyle</span></div>
            </div>
            <div className='textttt' id='healthy'>
                <p style={{ textIndent: '20px', color: 'black' }}>Physical activity is known to release endorphins, which are natural mood lifters. Regular exercise also reduces the levels of stress hormones like cortisol in the body. Engaging in activities like walking, jogging, yoga, or swimming can help alleviate anxiety symptoms.Eating a balanced diet that includes a variety of nutrients can support brain health and mood regulation. Avoid excessive consumption of sugar and processed foods, as they can lead to energy fluctuations and mood swings. A diet rich in whole grains, fruits, vegetables, lean proteins, and healthy fats can help stabilize mood and energy levels.nt: Developing effective stress management techniques, such as mindfulness meditation, deep breathing exercises, progressive muscle relaxation, or journaling, can help individuals cope with daily stressors and prevent them from escalating into anxiety.</p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>8</span> <span style={{ color: 'black' }}>Painting</span></div>
            </div>
            <div className='textttt' id='schedule'>
                <p style={{ textIndent: '20px', color: 'black' }}>Painting, drawing, and doodling are great ways to practice mindfulness and get more in tune with yourself and your emotions.  Whether you know the direction you want to take or begin by aimlessly doodling, the creative process will help you deal with stressors in your life by bringing your attention to something new.</p>
                <p style={{ color: 'black' }}>When you engage in painting, you need to concentrate on the task at hand. This focus on the present moment, can help redirect your thoughts away from anxious or stressful concerns. The act of painting can be a calming and stress-reducing experience. The repetitive motions involved in painting can trigger the relaxation response in your body, lowering stress hormones like cortisol.</p>
                <p style={{ color: 'black' }}> Some people find that painting allows them to release built-up emotions in a safe and constructive way. This emotional release can lead to a sense of relief and decreased anxiety.</p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>9</span> <span style={{ color: 'black' }}>Spending time with pet and animals</span></div>
            </div>
            <div className='textttt' id='food'>
                <p style={{ textIndent: '20px', color: 'black' }}>Evidence suggests that attachment to pets is good for human health and even helps build a better community.

                    It's no secret that pets can contribute to your happiness. Studies show that dogs reduce stress, anxiety and depression; ease loneliness; encourage exercise and improve your overall health. For example, people with dogs tend to have lower blood pressure and are less likely to develop heart disease. Just playing with a dog has been shown to raise levels of the feel-good brain chemicals oxytocin and dopamine, creating positive feelings and bonding for both the person and their pet.
                </p>

                <p style={{ color: 'black' }}>Pets help manage anxiety. Now more than ever, many people are feeling anxious or struggling with mental health. Pets provide companionship and support. Also they can help you be more active. They give you a reason to get outside, get some fresh air and get active, which is proven to improve your mood, sleep and mental health.</p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>10</span> <span style={{ color: 'black' }}>Meditate</span></div>
            </div>
            <div className='textttt' id='meditate'>
                <p style={{ textIndent: '20px', color: 'black' }}>Meditation techniques, such as deep breathing, progressive muscle relaxation, and guided imagery, can trigger the body's relaxation response. This reduces the production of stress hormones like cortisol, leading to a decrease in overall stress levels. Mindfulness meditation encourages you to stay fully present in the moment, without judgment. This practice helps individuals become more aware of their thoughts and feelings, which can be particularly useful for those with anxiety disorders. By observing thoughts without attachment, you can gain a better understanding of your anxiety triggers and learn to manage them more effectively.Meditation can enhance your ability to regulate emotions. By learning to observe your thoughts and feelings without reacting impulsively, you can respond to stressors and anxiety triggers in a calmer, more thoughtful manner.</p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>11</span> <span style={{ color: 'black' }}>Do yoga</span></div>
            </div>
            <div className='textttt' id='yoga'>
                <p style={{ textIndent: '20px', color: 'black' }}>The practice of yoga incorporates relaxation techniques, including deep breathing and progressive muscle relaxation. These techniques activate the body's relaxation response, reducing the production of stress hormones like cortisol and promoting a sense of calm. Yoga emphasizes conscious, controlled breathing, which can be effective for managing anxiety. Breathing exercises in yoga, such as pranayama, can help individuals regulate their breath and calm the nervous system.Joining a yoga class or community can provide a sense of belonging and support. Interacting with like-minded individuals and sharing experiences can reduce feelings of isolation and anxiety. Different styles of yoga may offer varying levels of intensity and focus. Gentle and restorative yoga styles are often recommended for anxiety reduction, but it's essential to find a style that suits your preferences and physical abilities.</p>
            </div>

            <div>
                <div className='numbers'><span style={{ color: 'black' }}>12</span> <span style={{ color: 'black' }}>Spend time in nature</span></div>
            </div>
            <div className='textttt' id='worries'>
                <p style={{ textIndent: '20px', color: 'black' }}>Spending time in nature can help relieve stress and anxiety, improve your mood, and boost feelings of happiness and wellbeing. Whatever you call it – forest bathing, ecotherapy, mindfulness in nature, green time or the wilderness cure -- humans evolved in the great outdoors, and your brain benefits from a journey back to nature.</p>
                <p style={{ color: 'black', marginBottom: '50px' }}> You probably know that exercise is good for your state of mind. But did you know that working out in nature helps to reduce anxiety, among other benefits, even more than going to an indoor gym? Consider hitting some trails to get the best mental bang for your buck. Nature presents scenes that gently capture your attention instead of suddenly snatching it, calming your nerves instead of frazzling them.
                </p>
            </div>
        </div >
    )
}
