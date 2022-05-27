import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass, DiReact} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';


const CommentsApp = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project comments">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">Interactive Comments Section</h1>
                    <p className="subtitle fs-500">A Frontend Mentor Challenge</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            frontend development</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            project challenge</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            May 2022</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">This project is a solution to the Interactive Comments Section challenge on Frontend Mentor. This is a fully responsive component built with React and Sass. I chose this challenge to test my React knowledge while learning how to build a very common web component. Users can post, edit, reply and delete comments. I learned accessability best practices for buttons without text, making this commponent keyboard navigation and screen reader friendly. </p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <DiSass /> 
                            <SiNetlify />
                        </div>
                        <div className="flow-horiz-xs flow-xs">
                            <Button text="Website" href="https://interactivecommentsection.netlify.app" target/>
                            <Button text="Challenge" href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/fem-interactive-comments-section" target/>
                        </div>
                </main>
                <ProjectNav href="/your-daily-todos" next="Your Daily Todos"  />
                <Footer />
            </div>
        </>
    )
}

export default CommentsApp;