import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiCss3, DiReact } from 'react-icons/di';
import {SiSubstack} from 'react-icons/si';


const Dictionary = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project dictionary">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">Dictionary App</h1>
                    <p className="subtitle fs-500">A Frontend Mentor challenge</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            frontend development</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            component development</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            April 2023</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">My solution to the Frontend Mentor challenge is using React and Sass. The component allows users to search for words using the Free Dictioanry API. I used Sass loops and mixins to create the theme toggle and React Context to pass data. It was a great project to help boost my React Hook knowledge!</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <DiCss3 /> 
                            <SiSubstack />
                        </div>
                        <div className="flow-horiz-xs flow-xs">
                            <Button text="Website" href="https://fem-dictionary-web-app.netlify.app/" target/>
                            <Button text="Challenge" href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/dictionary-web-app" target/>
                        </div>
                </main>
                <ProjectNav href="/staff-listing" next="Staff Listing"/>
                <Footer />
            </div>
        </>
    )
}

export default Dictionary;