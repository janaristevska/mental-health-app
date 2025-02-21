import React from 'react'
import '../styles/Meditation.css';
import video1 from '../images/whatIsMed.mp4';
import video2 from '../images/mindfullness.mp4';
import video3 from '../images/place.mp3';
import video4 from '../images/inside.mp3';
import video5 from '../images/outside.mp3';
import video6 from '../images/confidence.mp3';
import video7 from '../images/focus.mp3';
import video8 from '../images/motivation.mp3';

function Meditation() {
    return (
        <div className="meditation-container">
            <div className='titlemed'>Meditation</div>
            <div className='medprg'>
                <p>Starting a regular habit of meditation can help us to improve concentration, reduce stress & anxiety, alleviate depression and generally improve our mental wellbeing.</p>
                <h2>What is meditation?</h2>
                <p>When we meditate, we are concerned only by the now. The past is a memory, and the future is an expectation. We are entirely in the present, where reality is.</p>
                <audio controls>
                    <source src={video1} type="audio/mp3" />
                </audio>

                <h2>What is mindfullness?</h2>
                <p>Mindfulness is about observing thoughts and feelings without getting caught up in them. It's about learning to live in the present moment rather than the past or future. It's about living in the "now."</p>
                <audio controls>
                    <source src={video2} type="audio/mp3" />
                </audio>

                <h2>Where to meditate?</h2>
                <p>You don't need any special place, position or props to meditate. Find a comfortable, position where you can feel relaxed but alert. Close your eyes, and take some deep breaths...</p>
                <audio controls>
                    <source src={video3} type="audio/mp3" />
                </audio>

                <h2>Walking Inside Meditation</h2>
                <p>Walking at an extremely slow pace takes you away from your usual automatic way of moving and allows you to pay closer attention to your body, with a fresh perspective.</p>
                <audio controls>
                    <source src={video4} type="audio/mp3" />
                </audio>

                <h2>Walking Outside Meditation</h2>
                <p>A walking meditation can transform a well-known route, as you become more acutely aware of the things around you. This is a great way of practicing how to be more mindful in your day-to-day life.</p>
                <audio controls>
                    <source src={video5} type="audio/mp3" />
                </audio>

                <h2>Confidence</h2>
                <p>Self confidence is important in all aspects of our lives. This meditation will explore on how mindfulness can help you recognise fear and self-doubt as they arise and instead stay focused on the present moment.</p>
                <audio controls>
                    <source src={video6} type="audio/mp3" />
                </audio>

                <h2>Focus</h2>
                <p>It can be difficult for a lot of people to remain focused on their work for long periods of time, especially if the task at hand isn't so interesting. Mindfulness meditation is a way of training yourself to maintain your focus.</p>
                <audio controls>
                    <source src={video7} type="audio/mp3" />
                </audio>

                <h2>Motivation</h2>
                <p>Introducing mindfulness into our work can make us more engaged in what we're doing and reinvigorate our interest. We can think of work as the object of our meditation, paying close attention to every aspect of it.</p>
                <audio controls>
                    <source src={video8} type="audio/mp3" />
                </audio>
            </div>


        </div>
    )
}

export default Meditation