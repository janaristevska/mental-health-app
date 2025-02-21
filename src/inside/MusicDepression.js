import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import upbeat1 from '../musicDepression/upbeat1.mp4';
import upbeat2 from '../musicDepression/upbeat2.mp4';
import upbeat3 from '../musicDepression/upbeat3.mp4';
import motivational1 from '../musicDepression/motivational1.mp4';
import motivational2 from '../musicDepression/motivational2.mp4';
import motivational3 from '../musicDepression/motivational3.mp4';
import folk1 from '../musicDepression/folk1.mp4';
import folk2 from '../musicDepression/folk2.mp4';
import folk3 from '../musicDepression/folk3.mp4';
import blues1 from '../musicDepression/blues1.mp4';
import blues2 from '../musicDepression/blues2.mp4';
import blues3 from '../musicDepression/blues3.mp4';
import classicalD1 from '../musicDepression/classicalD1.mp4';
import classicalD2 from '../musicDepression/classicalD2.mp4';
import classicalD3 from '../musicDepression/classicalD3.mp4';
import emotional1 from '../musicDepression/emotional1.mp4';
import emotional2 from '../musicDepression/emotional2.mp4';
import emotional3 from '../musicDepression/emotional3.mp4';

function MusicDepression() {
    return (
        <div className='musicdep'>
            <Link to="/depression" className="back">
                <MdOutlineArrowBackIosNew />
            </Link>
            <div className='all'>
                <h3>Upbeat and Uplifting Music</h3>

                <div>
                    <audio controls>
                        <source src={upbeat1} type="audio/mp3" />
                    </audio>
                </div>


                <div>
                    <audio controls>
                        <source src={upbeat2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={upbeat3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Motivational and Inspirational Songs</h3>
                <div>
                    <audio controls>
                        <source src={motivational1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={motivational2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={motivational3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Folk and Singer-Songwriter Music</h3>
                <div>
                    <audio controls>
                        <source src={folk1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={folk2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={folk3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Blues and Soul Music</h3>
                <div>
                    <audio controls>
                        <source src={blues1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={blues2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={blues3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Classical Music</h3>
                <div>
                    <audio controls>
                        <source src={classicalD1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={classicalD2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={classicalD3} type="audio/mp3" />
                    </audio>
                </div>

                <h3>Emotional and Cathartic Music</h3>
                <div>
                    <audio controls>
                        <source src={emotional1} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={emotional2} type="audio/mp3" />
                    </audio>
                </div>

                <div>
                    <audio controls>
                        <source src={emotional3} type="audio/mp3" />
                    </audio>
                </div>

            </div>
        </div>
    );
}

export default MusicDepression;
