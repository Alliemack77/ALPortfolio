import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import { DiHtml5 } from 'react-icons/di';
import {SiNetlify, SiCss3} from 'react-icons/si';

const Skate = () => {
    return (
        <>
            <Navbar isProject />
            <div className="project skate">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">The Skate Shop</h1>
                    <p className="subtitle fs-500">An exploration of layout</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            Frontend developer/designer</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            Personal project</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            February 2021</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">I love learning by doing. I designed this landing page to explore building layouts with Flexbox and a mobile first workflow. The result is a fully responsive site that works on a multitude of devices. I especially love the use of clamp() with font-size to create responsive typography.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiHtml5 /> 
                            <SiCss3 /> 
                            <SiNetlify />  
                        </div>
                        <div className="flow-xs flow-horiz-xs">
                            <Button text="Website" href="https://theskateshop.netlify.app" target/>
                            <Button text="Figma" href="https://www.figma.com/file/GkWAuuSnwxT0HRQBGtKu5E/The-Skate-Shop?node-id=0%3A1" target/>
                            <Button text="GitHub" href="https://github.com/Alliemack77/The-Skate-Shop" target/>
                        </div>
                </main>
                <ProjectNav href="/staff-listing" next="Staff Listing"/>
                <Footer />
            </div>
        </>
    )
}

export default Skate;