import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import ambient1 from '../musicInsomnia/ambient1.mp4';
import ambient2 from '../musicInsomnia/ambient2.mp4';
import ambient3 from '../musicInsomnia/ambient3.mp4';
import nature1 from '../musicInsomnia/nature1.mp4';
import nature2 from '../musicInsomnia/nature2.mp4';
import nature3 from '../musicInsomnia/nature3.mp4';
import classical1 from '../musicInsomnia/classical1.mp4';
import classical2 from '../musicInsomnia/classical2.mp4';
import classical3 from '../musicInsomnia/classical3.mp4';
import instrumental1 from '../musicInsomnia/instrumental1.mp4';
import instrumental2 from '../musicInsomnia/instrumental2.mp4';
import instrumental3 from '../musicInsomnia/instrumental3.mp4';
import binaural1 from '../musicInsomnia/binaural1.mp4';
import binaural2 from '../musicInsomnia/binaural2.mp4';
import binaural3 from '../musicInsomnia/binaural3.mp4';
import meditation1 from '../musicInsomnia/meditation1.mp4';
import meditation2 from '../musicInsomnia/meditation2.mp4';
import meditation3 from '../musicInsomnia/meditation3.mp4';
import lullabies1 from '../musicInsomnia/lullabies1.mp4';
import lullabies2 from '../musicInsomnia/lullabies2.mp4';
import lullabies3 from '../musicInsomnia/lullabies3.mp4';

function MusicInsomnia() {
    return (
        <div className='musicins'>
            <Link to="/insomnia" className="back">
                <MdOutlineArrowBackIosNew />
            </Link>
            <div className='all'>
                <h3>Ambient Music</h3>
                <div>
                    <audio controls>
                        <source src={ambient1} type="audio/mp3" />
                    </audio>
                </div>


                <div>
                    <audio controls>
                        <source src={ambient2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={ambient3} type="audio/mp3" />
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

                <h3>Classical Music</h3>
                <div>
                    <audio controls>
                        <source src={classical1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={classical2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={classical3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Instrumental and Piano Music</h3>
                <div>
                    <audio controls>
                        <source src={instrumental1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={instrumental2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={instrumental3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Binaural Beats</h3>
                <div>
                    <audio controls>
                        <source src={binaural1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={binaural2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={binaural3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Meditation Sounds</h3>
                <div>
                    <audio controls>
                        <source src={meditation1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={meditation2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={meditation3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Lullabies and Soft Singing</h3>
                <div>
                    <audio controls>
                        <source src={lullabies1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={lullabies2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={lullabies3} type="audio/mp3" />
                    </audio>
                </div>

            </div>
        </div>
    );
}

export default MusicInsomnia;
