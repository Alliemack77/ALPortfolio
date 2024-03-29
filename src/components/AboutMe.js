import Socialbar from "./Socialbar";
import {DiSass, DiReact, DiCss3Full, DiJavascript1  } from 'react-icons/di';
 
const AboutMe = ({onClick}) => {

    return (
        <div className="about-me">
            <div className="info">
                <button className="about-me-toggle" onClick={onClick} />
                <div className="body">
                    <h2 className="title text-dark-blue ff-heading fw-700">Hello, world! It's me, Allison.</h2>
                    {/* <p className="text-dark-blue fs-200">Frontend Web Developer and Designer</p> */}
                    <p className="text-dark-blue fs-300">I'm a <span className="fw-700">Frontend Web Developer </span> living in Mountain View, California. <span className="fw-700">I love writing CSS</span> and using <span className="fw-700">Sass</span> to build modern user experiences on the web.</p>
                    <p className="text-dark-blue fs-300"><span className="fw-700">React</span> is my framework of choice, but I believe that half the fun is exploring the unknown. Want to explore together?</p>
                    <p className="text-dark-blue fs-300">Most of my projects are frontend focused, but I am <span className="fw-700">curious about all things web development</span>. Checkout the <span className="fw-700">mini projects section</span> where I explore <span className="fw-700">API's, express, node</span> and more!</p>
                    <p className="text-dark-blue fs-300">When not styling the web you can find me <span className="fw-700">reading sci-fi novels</span>, <span className="fw-700">baking</span>, or <span className="fw-700">watching Dr. Who</span>.</p>
                </div>
                <div className="tech-icons">
                    <DiReact /> 
                    <DiCss3Full /> 
                    <DiSass /> 
                    <DiJavascript1 />   
                </div>
            </div> 

            <div className="contact">
                <h2 className="ff-heading ">Contact Me</h2>
                <Socialbar />
            </div>
            
        </div>
    )
}

export default AboutMe;