import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass, DiReact} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';


const GithubSearchApp = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project github">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">GitHub User Search</h1>
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
                            March 2023</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">This is my solution to the GitHub User Search challenge on Frontend Mentor. This component is built with React and uses the GitHub API to display user information. In this project I learned how to use React Context to make for easier prop sharing. I used Sass mixins and lists to create the dark and light mode themes as well as the new CSS Container Queries to adjust the layout based on the size of the component instead of the viewport.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <DiSass /> 
                            <SiNetlify />
                        </div>
                        <div className="flow-horiz-xs flow-xs">
                            <Button text="Website" href="https://fem-search-github-users.netlify.app/" target/>
                            <Button text="Challenge" href="https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/github-user-search" target/>
                        </div>
                </main>
                <ProjectNav href="/interactive-comments-section" next="Interactive Comments Section"/>
                <Footer />
            </div>
        </>
    )
}

export default GithubSearchApp;