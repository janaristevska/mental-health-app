import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import '../styles/MusicAnxiety.css';
import { Link } from 'react-router-dom';
import classicalA1 from '../musicAnxiety/classialA1.mp4';
import classicalA2 from '../musicAnxiety/classialA2.mp4';
import classicalA3 from '../musicAnxiety/classialA3.mp4';
import nature1 from '../musicAnxiety/nature1.mp4';
import nature2 from '../musicAnxiety/nature2.mp4';
import nature3 from '../musicAnxiety/nature3.mp4';
import electronic1 from '../musicAnxiety/electronic1.mp4';
import electronic2 from '../musicAnxiety/electronic2.mp4';
import electronic3 from '../musicAnxiety/electronic3.mp4';
import chillout1 from '../musicAnxiety/chillout1.mp4';
import chillout2 from '../musicAnxiety/chillout2.mp4';
import chillout3 from '../musicAnxiety/chillout3.mp4';
import acoustic1 from '../musicAnxiety/acoustic1.mp4';
import acoustic2 from '../musicAnxiety/acoustic2.mp4';
import acoustic3 from '../musicAnxiety/acoustic3.mp4';
import instrumentalA1 from '../musicAnxiety/instrumentalA1.mp4';
import instrumentalA2 from '../musicAnxiety/instrumentalA2.mp4';
import instrumentalA3 from '../musicAnxiety/instrumentalA3.mp4';


function MusicAnxiety() {
    return (
        <div className='musicanx'>
            <Link to="/anxiety" className="back">
                <MdOutlineArrowBackIosNew />
            </Link>
            <div className='all'>
                <h3>Classical Music</h3>

                <div>
                    <audio controls>
                        <source src={classicalA1} type="audio/mp3" />
                    </audio>
                </div>


                <div>
                    <audio controls>
                        <source src={classicalA2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={classicalA3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Nature Sounds</h3>
                <div>
                    <audio controls>
                        <source src={nature1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={nature2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={nature3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Ambient and Electronic Music</h3>
                <div>
                    <audio controls>
                        <source src={electronic1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={electronic2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={electronic3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Chillout and Downtempo</h3>
                <div>
                    <audio controls>
                        <source src={chillout1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={chillout2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={chillout3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Acoustic Guitar and Folk Music</h3>
                <div>
                    <audio controls>
                        <source src={acoustic1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={acoustic2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={acoustic3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Instrumental and Piano Music</h3>
                <div>
                    <audio controls>
                        <source src={instrumentalA1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={instrumentalA2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={instrumentalA3} type="audio/mp3" />
                    </audio>
                </div>

            </div>
        </div>
    );
}

export default MusicAnxiety;
