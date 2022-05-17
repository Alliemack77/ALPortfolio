import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass, DiReact} from 'react-icons/di';
import {SiWebpack} from 'react-icons/si';

// import {SiNetlify} from 'react-icons/si';


const Vortex = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project vortex">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">The Vortex Project</h1>
                    <p className="subtitle fs-500">The ultimate Doctor Who experiance</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            designer/developer</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            personal project</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            ongoing</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">The Vortex Project is a website dedicated to all things Doctor Who. I'm a huge fan of the BBC series, and wanted to show my love while diving deeper into my frontend skills. The website includes a web scraper to inject news articles scraped from the BBC's Doctor Who homepage, as well as consuming data from the Doctor Who API I created. The goal of this project was to build a react app from scratch, without the use of create-react-app. This project is still in development, so no live site yet, but feel free to explore the design files and repo below.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <DiSass /> 
                            <SiWebpack />  
                        </div>
                        <div className="flow-xs flow-horiz-xs">
                            {/* <Button text="Website" href="https://neebsgaming.netlify.app"/>  target*/}
                            <Button text="Figma" href="https://www.figma.com/file/AFbof5QUm3V16HLnbwDvt4/Dr-Who-News?node-id=12%3A5" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/The-Vortex-Project" target/>
                        </div>
                </main>
                <ProjectNav href="/neebs-gaming" next="Neebs Gaming"  />
                <Footer />
            </div>
        </>
    )
}

export default Vortex;