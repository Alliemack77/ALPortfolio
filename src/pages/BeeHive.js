import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass, DiReact} from 'react-icons/di';
import {SiNetlify, SiGitlab, SiRedux} from 'react-icons/si';

const Music = () => {
    return (
        <>
            <Navbar isProject />
            <div className="project beehive">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">The BeeHive</h1>
                    <p className="subtitle fs-500">A Project for Inclusion</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            frontend developer/designer</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            DCI Final Project </p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            June 2021</p>
                    </div>
                </header>
                <main className="description">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">The BeeHive is a networking platform for neurodiverse IT professionals who are looking for career support and community. I developed this project alongside four classmates as our final project at Digital Career Institute.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <SiRedux /> 
                            <DiSass /> 
                            <SiGitlab /> 
                            <SiNetlify />  
                        </div>
                        <div className="flow-xs flow-horiz-xs">
                            <Button text="Website" href="https://thebeehivenetwork.netlify.app" target />
                            <Button text="Figma" href="https://www.figma.com/file/NiCxcjrkUTx5RQdsmV4PjS/Final-Project-Wireframe?node-id=144%3A879"  target/>
                            <Button text="GitLab" href="https://gitlab.com/dci-final-project/dci-final-project" target />
                        </div>
                </main>
                <ProjectNav href="/the-skate-shop" next="The Skate Shop"/>
                <Footer />
            </div>
        </>
    )
}

export default Music;