import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {DiSass, DiReact} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';


const TodoApp = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project todos">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">Your Daily Todos</h1>
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
                        <p className="body fs-400">Your Daily Todos is a solution to the Todo App challenge on Frontend Mentor. This is a fully responsive app built with React hooks and Sass. Users can add, delete, mark entries as complete, filter todos by status and clear all completed todos. The dark mode toggle was created using Sass mixins, lists and variables. I also used local storage to store user todos between page renders.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <DiReact /> 
                            <DiSass /> 
                            <SiNetlify />
                        </div>
                        <div className="flow-horiz-xs flow-xs">
                            <Button text="Website" href="https://todaystasks.netlify.app/" target/>
                            <Button text="Challenge" href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/FEM-todo-app-challenge" target/>
                        </div>
                </main>
                <ProjectNav href="/the-vortex" next="The Vortex Project"  />
                <Footer />
            </div>
        </>
    )
}

export default TodoApp;