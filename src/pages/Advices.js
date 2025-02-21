import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../images/value.jpg";
import img2 from "../images/takecare.jpg";
import img3 from "../images/friends.jpg";
import img4 from "../images/stress.jpg";
import img5 from "../images/mind.jpg";
import img6 from "../images/goals.jpg";
import img7 from "../images/monotony.jpg";
import img8 from "../images/alcohol.jpg";
import img9 from "../images/coffee.jpg";
import colorSharp2 from "../images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/Advicess.css";

export const Advices = () => {
    const projects = [
        {
            title: "Value yourself",
            description: "Treat yourself with kindness and respect, and avoid self-criticism. Make time for your hobbies and favorite projects, or broaden your horizons. Do a daily crossword puzzle, plant a garden, take dance lessons, learn to play an instrument or become fluent in another language.",
            imgUrl: img1,
        },
        {
            title: "Take care of your body",
            description: "Taking care of your body is indeed essential for maintaining good mental health. The mind and body are closely connected, and physical well-being can have a significant impact on your mental well-being.",
            imgUrl: img2,
        },
        {
            title: "Surround yourself with good people",
            description: "People with strong family or social connections are generally healthier than those who lack a support network. Make plans with supportive family members and friends, or seek out activities where you can meet new people, such as a club, class or support group.",
            imgUrl: img3,
        },
        {
            title: "Learn how to deal with stress",
            description: "Like it or not, stress is a part of life. Practice good coping skills: try one-minute stress strategies, take a nature walk, play with your pet or try journal writing as a stress reducer. Also, remember to smile. Research shows that laughter can boost your immune system, ease pain, relax your body and reduce stress. ",
            imgUrl: img4,
        },
        {
            title: "Quiet your mind",
            description: "Nearly every beginner's meditation lesson opens with “quieting the mind.” But what does that mean? What is truly meant by quiet in the mind is silencing the thoughts. In our daily lives we spend a lot of our time thinking. Thinking is our overt internal examination of our place in the world.",
            imgUrl: img5,
        },
        {
            title: "Set realistic goals",
            description: "Decide what you want to achieve academically, professionally and personally, and write down the steps you need to realize your goals. Aim high, but be realistic and don't over-schedule. You'll enjoy a tremendous sense of accomplishment and self-worth as you progress toward your goal.",
            imgUrl: img6,
        },
        {
            title: "Break up the monotony",
            description: "Although our routines make us more efficient and enhance our feelings of security and safety, a little change of pace can perk up a tedious schedule. Alter your jogging route, plan a road-trip, take a walk in a different park, hang some new pictures or try a new restaurant.",
            imgUrl: img7
        },
        {
            title: " Avoid alcohol",
            description: " Keep alcohol use to a minimum. Sometimes people use alcohol to “self-medicate” but in reality, alcohol can only aggravate problems.",
            imgUrl: img8,
        },
        {
            title: "Start your day with a cup of co­ffee",
            description: "It can be a great start to your day to have a cup of coffee before you begin with your activities. Coffee contains elements known to help rejuvenate the body and keep it energised.",
            imgUrl: img9,
        },
    ];



    return (
        <section className="project" id="advices">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>9 things to do for your mental health</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <div className="projects-grid">
                                                    {projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })}
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}


/*
  <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
*/