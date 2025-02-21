import React from 'react'
import '../styles/Read.css'
import { useState } from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';


const data = [
    {
        question: '"The Guernsey Literary and Potato Peel Pie Society"',
        answer: 'January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she’s never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb…. As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends — and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society — born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island — boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all. Juliet begins a remarkable correspondence with the society’s members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever. Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises, and of finding connection in the most surprising ways. This book is like comfort food for the soul. I loved reading it so much that I rated it 5 stars on Goodreads. While it is entertaining and elegantly written, the action is subdued because it is told through letters and we do not see it first hand. That makes it easy reading to calm you down and help you sleep.'
    },
    {
        question: '"Gabriel’s Ghost"',
        answer: 'After a decade of piloting interstellar patrol ships, former captain Chasidah Bergren, onetime pride of the Sixth Fleet, finds herself court-martialed for a crime she didn’t commit-nd shipped off to a remote prison planet from which no one ever escapes. But when she kills a brutal guard in an act of self-defense, someone even more dangerous emerges from the shadows. Gabriel Sullivan– alpha mercenary, smuggler, and rogue–is supposed to be dead. Yet now this seductive ghost from Chaz’s past is offering her a ticket to freedom– for a price. Someone in the Empire is secretly breeding jukors: vicious and uncontrollable killing machines that have long been outlawed. Gabriel needs Chaz to help him stop the practice before it decimates Imperial space. The mission means putting their lives on the line-but the tensions that heat up between them may be the riskiest part of all. While this book has a lot of action, the sexual tension between Gabriel and Chaz will give you some very sweet dreams and certainly chase thoughts of dirty dishes away. The love and devotion Gabriel has for Chaz will comfort and relax you as you prepare for sleep.'
    },
    {
        question: '"Born in Fire"',
        answer: 'The eldest Concannon sister, Maggie, is a reclusive, stubborn and free-spirited glassmaker — with a heart worth winning. Margaret Mary is a glass artist with an independent streak as fierce as her volatile temper. Hand-blowing glass is a difficult and exacting art, and while she may produce the delicate and the fragile, Maggie is a strong and opinionated woman, a Clare woman, with all the turbulence of that fascinating west country. One man, Dublin gallery owner Rogan Sweeney, has seen the soul in Maggie’s art, and vows to help her build a career. When he comes to Maggie’s studio, her heart is inflamed by their fierce attraction — and her scarred past is slowly healed by love… Nora Roberts always has cozy romances will put a smile on your face before you fall asleep. While Maggie has a fiery temper, she will not keep you up at night. The action is subdued with the main story being the love story between Maggie and Rogan. This book will leave dreaming of Ireland and local artists.'
    },
    {
        question: '"Jeffrey the Seagull"',
        answer: 'Every day, in good or bad weather, large and small ships passed through a narrow waterway along a rocky coastal landscape. The old lighthouse guided their way, ensuring visibility even at night and during heavy storms.  Jeffrey the Seagull loved spending his time at the beach. There, he watched the ships come and go, dreaming of the adventures of the seafarers.  One day, as he was eating a lugworm, Jeffrey was startled from his daydream by loud honking. He flew towards the harbor where he could see many large ships crowding in the narrow waterway. It was pure chaos! Jeffrey scratched his head with his wing. No one knew the harbor as well as he did, and there had never been such chaos here. After all, the lighthouse always helped bring the ships safely into the harbor. Then it became clear to him. The light in the lighthouse must not be working! Bad weather was forecast for that afternoon and the next few days. Jeffrey watched as a thick fog rolled in over the harbor and rain started to pour. The large ships were dangerously close to shore and each other as they now also struggled to see. Jeffrey thought about how he could help. He had an idea. He grabbed a small lantern and tied it around his neck. Then he flew into the harbor. The waves were getting bigger and Jeffrey could barely see a beak’s length ahead of him. But he was not afraid. He knew he was the only one who could help now. No one had studied the lighthouse signals for as long or as closely as he had. As the honking grew louder and the smell of engine oil grew stronger, Jeffrey knew that he had reached the first ship.'
    },
    {
        question: '"Susan a Very Special Zebra"',
        answer: 'One hot afternoon, Jasper the Lion, Richard the Meerkat, and Susan the Zebra were lounging on a hill under a shady tree. From here, they had a great view of the African savannah. Since the rainy season was almost over, and the bushes and trees hung full of green leaves, a lot of animals had been gathering at the watering holes. From their shady spot, the three friends enjoyed watching them. They found the large elephants especially entertaining, as they could suck vast amounts of water into their long trunks. “If this keeps up, the watering hole will dry up in a few days!” said Richard. Jasper and Susan were only listening with one ear. They were busy with their card game. Just as Susan was about to put down her last card and joyfully announce her win, a passing wildebeest stopped and looked at them. “What a strange zebra you are,” the wildebeest said, looking Susan over from top to bottom. Richard jumped up and stood in front of her. “Who are you, and what exactly is strange about our friend?” he said defensively. “You don’t you see it?” the wildebeest asked, still looking at Susan in amazement. Now Jasper also sat up and asked, “What exactly don’t we see?” Jasper and Richard both looked Susan up and down. Richard said, “I don’t see anything. That’s how Susan always looks!” Susan felt very uncomfortable. She had never been examined like this before, nor had anyone called her strange. She would have liked to hide completely behind her friends or crawl behind the tree. But it was too late. Now the entire herd of wildebeests stopped to stare. They were looking at Susan and mumbling to themselves.'
    },
    {
        question: '"Leo the Cat Bakes Waffles"',
        answer: 'One Sunday, Leo the Cat’s family was having friends over for a visit. Leo enjoyed it very much when guests came to their house because they would always play and cuddle with him. Leo would be the center of attention the whole time. If he was lucky, someone would hold him and rub his ears for hours. That day, there were delicious smells coming from the kitchen. The family was preparing waffle batter. Leo especially loved the milk that went into the batter. He could sniff it from anywhere in the house. Leo was very good at observing. Nothing escaped him and today was no different. He sat down on the tile floor of the kitchen and closely followed the waffle preparations. Of course, he was always hopeful that he would get some scraps. Maybe something would spill on the floor and he would get to lick it up? But not this time. What a pity! He dreamed of tasting the milk. But Leo’s family always fed him at specific times. They worried that he might get too fat. When the delicious-smelling waffles were ready, his Mom sprinkled them with powdered sugar and served them to the guests. Unable to resist sweet things, Leo ran to each guest in turn, meowing affectionately to see if he could get them to share their waffles. But every guest followed the rule about not feeding the cat. With a sigh, he took one last sniff of the delicious scent and retreated to the sofa. That’s when he had an idea. He would wait for the next day when everyone went to work and he had the whole kitchen to himself. Then he could do whatever he wanted! That night he could hardly sleep because he was so excited. The next morning, the family said goodbye to Leo the Cat. As usual, his Mom said, “Be a good boy, have a nice day, and we’ll see you tonight!” '
    },
]

function ReadInsomnia() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className='wrapperins'>
            <Link to="/insomnia" className="backi">
                <MdOutlineArrowBackIosNew />
            </Link>
            <div className='accordion'>
                <div className='readsi'>Read stories for better sleep</div>
                {data.map((item, i) => (
                    <div className='itemi'>
                        <div className='titlein' onClick={() => toggle(i)}>
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

export default ReadInsomnia
