import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'
import { clear } from "@testing-library/user-event/dist/clear"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Full Stack Developer', 'SDE', 'Data Engineer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta);

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        } 

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                        <span className ="tagline">Welcome to my Portfolio</span>
                        <h1>Hi, I'm <span className = "highlight">Akash Balaji</span>, an aspiring <span className="wrap">{text}</span></h1>

                        <p>As a graduate student in Computer Science at the University of Florida, I am passionate about software development, data analysis, and machine learning. My academic and project experience has equipped me with strong skills in programming languages such as Python, C++, and JavaScript, as well as proficiency in tools like TensorFlow, React, and SQL.

Throughout my studies, I have worked on diverse projects, including developing web applications for image processing, creating autonomous tools using AI, and conducting data engineering tasks such as data cleaning, analysis, and visualization. These experiences have not only honed my technical skills but also my ability to tackle complex challenges, think critically, and deliver high-quality solutions.

I am particularly interested in roles that allow me to leverage my technical expertise and enthusiasm for continuous learning. I thrive in collaborative environments where I can contribute to innovative projects and learn from seasoned professionals.

Currently, I am seeking opportunities in software engineering, data science, and related fields where I can apply my knowledge, gain valuable industry experience, and make meaningful contributions to cutting-edge projects.

Let's connect and explore how we can work together to drive technological advancements and achieve mutual goals!</p>

                        <button onClick={() => console.log('connect')}><span>Let's Connect <ArrowRightCircle size = {25}/></span></button>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {headerImg} alt = "Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}