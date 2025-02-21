import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import '../styles/LogoAnimation.css';

const LogoAnimation = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [fade, setFade] = useState("fade-in"); // Initialize fade state
    const history = useHistory();

    const message = "MindWellness".split("");

    const messageAnimation = useTrail(message.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        onRest: () => {
            setShowMessage(true);
        },
        delay: 1000,
    });

    const logoAnimation = useSpring({
        from: { transform: "rotate(0deg)", opacity: 1 },
        to: async (next) => {
            await next({ transform: "rotate(360deg)", opacity: 1 });
        },
        config: { duration: 1300 },
    });

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 1000);

        setTimeout(() => {
            setFade("fade-out");
        }, 3000);

        setTimeout(() => {
            history.push("/main");
        }, 3500);
    }, [history]);

    return (
        <div className={`wlclogo ${fade}`}>
            <div className="logo-animation">
                <animated.img src={logo} alt="Logo" style={logoAnimation} />

                {showMessage && (
                    <div className="welcome-message">
                        {messageAnimation.map((style, index) => (
                            <animated.span key={index} style={style}>
                                {message[index]}
                            </animated.span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LogoAnimation;
