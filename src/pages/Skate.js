import Button from "../components/Button";
import Footer from "../components/Footer";
import { DiHtml5 } from 'react-icons/di';
import {SiNetlify, SiCss3} from 'react-icons/si';
import Navbar from "../components/Navbar";

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
                        <p className="body fs-400">My favorite way to learn is to try and emulate a really cool webiste. This was the first project where I designed in Figma first, then translated the design into code. I had so much fun building this landing page, eventhough I can see a lot of places where I've improved since then. However everytime I visit this page I can feel the ocean breeze in my hair while I zip amongst sun-soaked palm trees on my electric skateboard. </p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiHtml5 /> 
                            <SiCss3 /> 
                            <SiNetlify />  
                        </div>
                        <div className="project-buttons flow-horiz-xs">
                            <Button text="Website" href="https://theskateshop.netlify.app" target="_blank" />
                            <Button text="Figma" href="https://www.figma.com/file/GkWAuuSnwxT0HRQBGtKu5E/The-Skate-Shop?node-id=0%3A1" target="_blank" />
                            <Button text="GitHub" href="https://github.com/Alliemack77/The-Skate-Shop" target="_blank" />
                        </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Skate;