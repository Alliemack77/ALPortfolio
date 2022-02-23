import Button from "../components/Button";
import Footer from "../components/Footer";
import {DiSass} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';
import Navbar from "../components/Navbar";

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
                        <p className="body fs-400">I created this project to challenge how quickly I could design, build and deploy a webpage. The concept was a landing page promoting online performances for a recording studio in downtown Nashville. This project took 10 days to complete and looking back I can spot some design flaws, but overall I think I was able to capture the spirit of this fictional hotspot.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiSass /> 
                            <SiNetlify />  
                            <p className="ff-heading">Parcel</p>
                        </div>
                        <div className="project-buttons flow-horiz-xs">
                            <Button text="Website" href="https://themusicshop.netlify.app" target="_blank" />
                            <Button text="Figma" href="https://www.figma.com/file/fC5k21fTR1orChA12w7XiX/Music-Sessions?node-id=5%3A0" target="_blank" />
                            <Button text="Github" href="https://github.com/Alliemack77/TheMusicShop" target="_blank" />
                        </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Music;