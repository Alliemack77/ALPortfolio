import Button from "../components/Button";
import Footer from "../components/Footer";

const Skate = () => {
    return (
        <>
            <div className="project skate">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">The Skate Shop</h1>
                    <p className="subtitle fs-500">An exploration of layout</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            frontend/ux/ui developer</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            Person project</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            February 2021</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">The BeeHive is a networking platform created to support the often overlooked community of nerodiverse software developers. After a friend revealed the difficulity he had connecting with other developers like himself who were on the Asperger spectrum, I knew I had to help build this project. Uses React, Redux, Axios, and Sass. </p>
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