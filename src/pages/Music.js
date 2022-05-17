import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';

const Music = () => {
    return (
        <>
            <Navbar isProject />
            <div className="project music">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">The Music Shop</h1>
                    <p className="subtitle fs-500">Having fun with Sass and Netlify</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            Frontend design and build</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            Personal Project</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            June 2021</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">My favorite part of frontend development is styling with Sass. A goal of the project was to build a landing page with a magazine type of layout. I wanted to build a page with mood, one that reflected a dark and smokey jazz club. I used CSS Grid to overlap page elements, properties like clip-path: polygon() to create vivid shapes, and a custom linear-gradient to move the eye along the page, almost like the strings of a guitar. The Music Shop, a fictitious recording studio in downtown Nashville, is a jazzy trip into the luscious underbelly of CSS.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiSass /> 
                            <SiNetlify />  
                            <p className="ff-heading">Parcel</p>
                        </div>
                        <div className="flow-xs flow-horiz-xs">
                            <Button text="Website" href="https://themusicshop.netlify.app" target/>
                            <Button text="Figma" href="https://www.figma.com/file/fC5k21fTR1orChA12w7XiX/Music-Sessions?node-id=5%3A0" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/TheMusicShop" target/>
                        </div>
                </main>
                <ProjectNav href="/the-beehive" next="The BeeHive"/>
                <Footer />
            </div>
        </>
    )
}

export default Music;