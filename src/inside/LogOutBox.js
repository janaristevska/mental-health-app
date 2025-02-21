import React from 'react';
import { Button, ModalWrapper } from './LogOutStyled';
import img from '../images/logo.png';
import { Link } from 'react-router-dom';

const ModalBox = (props) => {

    const { isModalOpen, setIsModalOpen } = props;

    return (
        <>
            <ModalWrapper className={isModalOpen ? 'open' : ''}>
                <div className="modal_centered">
                    <div className="modal_content">
                        <figure className="modal_img">
                            <img src={img} style={{ width: '50px' }} alt="modal-img" />
                        </figure>
                        <p className="modal_txt">Are you sure you want to log out?</p>
                        <div>
                            <Link to='/main'>
                                <Button style={{ marginRight: '70px', color: 'black', backgroundColor: 'rgb(118, 118, 255)' }}>Yes</Button>
                            </Link>


                            <Button
                                style={{ color: 'black', backdropColor: 'whitesmoke' }}
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                            >
                                No
                            </Button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

export default ModalBox;