import React from 'react'
import '../styles/Read.css'
import sky from '../images/anxbg.jpg'
import { useState } from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';


const data = [
    {
        question: '"The Tranquil Forest"',
        answer: 'Once upon a time, in a land far away, there existed a magical forest known as the Tranquil Forest. This forest was unlike any other, as it possessed the power to ease the worries and anxieties of those who entered its serene realm. In the heart of the Tranquil Forest, there stood a magnificent ancient oak tree, known as the "Tree of Serenity." Its branches stretched high into the sky, casting a gentle shade over the forest floor. Underneath this wise tree, there was a soft bed of moss that seemed to cradle anyone who chose to rest upon it. One sunny morning, a young woman named Eliza ventured into the Tranquil Forest. Eliza had been feeling overwhelmed by the demands of her daily life and sought solace in this enchanted place. As she walked deeper into the forest, the worries that had burdened her mind began to fade away. Eliza eventually found herself at the foot of the Tree of Serenity. She settled onto the mossy bed and closed her eyes, taking deep, calming breaths. As she breathed in, she imagined inhaling the freshness of the forest, and with each exhale, she released her worries, watching them transform into tiny butterflies that fluttered away into the sky. Above her, the leaves of the ancient oak rustled gently in the breeze, creating a soothing melody. Birds sang melodious tunes, and a gentle stream nearby added its soft babbling to the natural symphony. Eliza lost track of time as she lay there, surrounded by the tranquility of the forest. She realized that in this serene place, there was no need to rush or worry about the past or the future. All that mattered was the present moment, and in that moment, she found peace. As the sun began to set, casting a warm golden glow through the trees, Eliza slowly got up from the mossy bed. She felt lighter and more at ease than she had in a long time. With a grateful heart, she left the Tranquil Forest, knowing that she could return whenever she needed a respite from life worries. And so, the Tranquil Forest remained a place of solace and serenity for all who sought its calming embrace, a reminder that in the midst of life chaos, there is always a peaceful refuge waiting to be discovered. Whenever you find yourself feeling anxious or overwhelmed, remember the Tranquil Forest and take a moment to breathe deeply, just like Eliza did, and imagine your worries transforming into butterflies that float away on the gentle breeze. In this way, you too can find a sense of calm and tranquility.'
    },
    {
        question: '"The Healing Waters"',
        answer: 'In a hidden valley nestled between towering mountains, there was a magical place known as the "Grove of Healing Waters." Within this serene grove lay a crystal-clear pond fed by a sparkling waterfall. The water in this pond was said to possess incredible healing properties, both for the body and the soul. One quiet afternoon, a weary traveler named Samuel stumbled upon the Grove of Healing Waters. Samuel had been on a long journey, burdened by the weight of his troubles and the fatigue of his travels. As he approached the pond, he noticed the air seemed to carry a gentle, soothing breeze, and the sunlight danced upon the water surface in a way that seemed to beckon him closer. With great curiosity, Samuel dipped his hand into the pond, feeling the coolness of the water against his skin. Instantly, he sensed a wave of tranquility wash over him, as if the worries and stress that had been plaguing him were being lifted away. Samuel decided to sit by the pond and allow the healing waters to work their magic. As he gazed at the shimmering surface, he noticed colorful koi fish gracefully gliding through the water, their movements both graceful and calming. The gentle sound of the waterfall provided a rhythmic backdrop to the scene, and Samuel closed his eyes, letting his mind wander. He began to imagine his worries as small, delicate paper boats. One by one, he placed these boats on the pond surface and watched as they slowly drifted away, carried by the current. With each boat that departed, he felt a growing sense of lightness and peace. Hours passed, and as the sun dipped below the mountains, Samuel opened his eyes. He felt rejuvenated, as though a heavy burden had been lifted from his shoulders. The Grove of Healing Waters had worked its magic, and Samuel anxiety had been replaced with a deep sense of serenity. With a grateful heart, Samuel rose from his spot by the pond and continued his journey. He knew that he could return to the Grove of Healing Waters whenever life challenges became too much to bear. As he walked away, he couldn not help but smile, knowing that there were places of solace and healing in the world, ready to offer their peace to anyone in need.'
    },
    {
        question: '"The Whispering Meadow"',
        answer: 'In a distant land, there was a meadow unlike any other. It was known as the "Whispering Meadow." This meadow was special because it had the power to soothe troubled hearts with its gentle whispers. One sunny day, a young woman named Clara found herself feeling overwhelmed by the pressures of her busy life. Her thoughts were a tangled web of worries and stress, and she longed for a moment of peace. Clara had heard tales of the Whispering Meadow from her grandmother, who had spoken of its magical ability to bring solace to those who sought it. Determined to find this magical place, Clara set off on a journey through rolling hills and dense forests. After a long and winding path, she emerged into a beautiful meadow. Flowers of every color stretched as far as the eye could see, and a soft breeze rustled the tall grasses. Clara lay down in the meadow, closed her eyes, and listened intently. At first, all she heard were the sounds of nature—birds singing, insects buzzing, and the wind whispering through the grass. But as she focused her attention, she began to hear the Meadow whispers. The meadow whispers were not words, but rather a gentle, melodic hum that seemed to resonate with Clara very soul. It was as though the meadow was sharing its ancient wisdom, telling her that it understood her worries and that everything would be alright. As Clara listened, her tense muscles relaxed, and her racing thoughts slowed. She felt a profound sense of connection to the natural world around her and a growing sense of inner peace. It was as though the meadow was absorbing her worries and replacing them with tranquility. Hours passed, and Clara eventually opened her eyes. The sun was beginning to dip below the horizon, casting a warm, golden light across the meadow. She knew it was time to leave the Whispering Meadow, but she carried its soothing presence with her in her heart. Clara returned home with a newfound sense of calm and perspective. Whenever life challenges threatened to overwhelm her, she would close her eyes and listen for the gentle whispers of the meadow in her mind. It reminded her that, just like the Whispering Meadow, there were moments of peace and beauty to be found even in the midst of life chaos. And so, Clara connection to the Whispering Meadow became a source of strength and serenity, a reminder that nature has the power to heal and comfort, and that moments of calm and peace are always within reach. Whenever you need a moment of respite from anxiety, try to find your own "Whispering Meadow" in nature or within your imagination. Close your eyes, listen to the soothing sounds around you, and allow yourself to be carried away by the tranquility of the moment.'
    },
    {
        question: '"The Starlit Lake"',
        answer: 'In a remote valley surrounded by mountains, there existed a pristine, starlit lake known as the "Lake of Tranquility." On clear nights, the reflection of the stars on the lake surface created a breathtaking spectacle. It was said that if one gazed upon the lake under the starry sky, their worries would fade away like distant constellations. One evening, a weary traveler named Ethan stumbled upon this hidden gem. He lay down by the lake edge, marveling at the twinkling stars above and their reflection in the calm water. He felt a profound connection to the universe, as if his worries were just fleeting thoughts in the vast cosmic tapestry. As he watched shooting stars streak across the sky, he made wishes of hope and healing, knowing that the universe heard him. Ethan left the Lake of Tranquility with a heart full of peace. He realized that the universe was always there, offering its beauty and solace to those who took the time to look up and connect with the cosmos. Whenever he felt anxious, he would gaze at the night sky and remember the serenity of the starlit lake.'
    },
    {
        question: '"The Peaceful Lighthouse"',
        answer: 'On a remote, windswept island, there stood an ancient lighthouse known as the "Lighthouse of Serenity." This lighthouse was perched on a cliff overlooking the endless expanse of the sea. Its beacon not only guided ships to safety but also provided a sense of calm to all who beheld it. One stormy night, a troubled soul named Oliver arrived on the island. He sought refuge from the turmoil of his life and found solace in the steady, rhythmic beam of the lighthouse. The light cut through the darkness, offering a sense of stability and direction. As Oliver watched the lighthouse beam, he realized that life, like the sea, had its storms and rough waters. But just as the lighthouse stood firm, his inner strength could guide him through even the toughest of times. With newfound determination, he faced his challenges and found a sense of peace in knowing that, like the lighthouse, he could provide light to his own path. Whenever life troubles weighed him down, Oliver would close his eyes and envision the steady beam of the Lighthouse of Serenity. It reminded him that within himself, he possessed the power to find his way and weather life storms. Feel free to return to these stories whenever you need a moment of calm and reassurance. Each story carries a unique message of peace and resilience, offering a reminder that there is beauty, solace, and strength to be found in the world around us.'
    },
    {
        question: '"The Enchanted Garden"',
        answer: 'In the heart of a bustling city, there existed a hidden oasis known as the "Enchanted Garden." This garden was a sanctuary of calm amid the urban chaos, and it held a secret: the flowers within it could absorb worries and turn them into bursts of vibrant color. One sunny afternoon, a woman named Mia stumbled upon the garden while seeking respite from her hectic life. As she walked among the blooming flowers, she couldn not help but notice their radiant hues. She reached out and touched a petal, and to her astonishment, her stress seemed to flow into the flower, transforming it into a brilliant shade of pink. Mia continued to explore the garden, running her fingers over the petals of different flowers, releasing her worries one by one. With each touch, the garden seemed to absorb her anxiety and replace it with a sense of serenity. By the time she left, the garden had transformed into a breathtaking tapestry of colors. Mia returned to the Enchanted Garden whenever she needed a reminder that nature had the power to heal. She found comfort in the idea that her worries could be transformed into beauty and that, like the flowers, she could bloom anew. '
    },
]

function ReadAnxiety() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className='wrapperanx'>
            <Link to="/anxiety" className="backa">
                <MdOutlineArrowBackIosNew />
            </Link>

            <div className='accordion'>
                <div className='reads'>Read stories to relax</div>
                {data.map((item, i) => (
                    <div className='iteman'>
                        <div className='titlean' onClick={() => toggle(i)}>
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

export default ReadAnxiety
