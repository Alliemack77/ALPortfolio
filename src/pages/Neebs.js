import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass, DiReact} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';


const Neebs = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project neebs">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">Neebs Gaming</h1>
                    <p className="subtitle fs-500">The Best Gaming Channel in the World</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            frontend/ux/ui developer</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            website redesign</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            January 2022</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">With almost 3 million subscribers, Neebs Gaming is well on their way to producing some of the most watched gaming content on YouTube. My goal in this redesign was to showcase their content, create dedicated pages for news, live events and merchandise, and build a space for fans like me to geek out.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <DiSass /> 
                            <SiNetlify />  
                        </div>
                        <div className="flow-xs flow-horiz-xs">
                            <Button text="Website" href="https://neebsgaming.netlify.app" target/>
                            <Button text="Figma" href="https://www.figma.com/file/nJ5faYkdZJRgBsgfKy4bNf/Neebs-Gaming?node-id=0%3A1" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/Neebs-Gaming" target/>
                        </div>
                </main>
                <ProjectNav href="/the-music-shop" next="The Music Shop"  />
                <Footer />
            </div>
        </>
    )
}

export default Neebs;