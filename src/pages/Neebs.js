import Button from "../components/Button";
import Footer from "../components/Footer";

const Neebs = () => {
    return (
        <>
            <div className="project neebs">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">Neebs Gaming</h1>
                    <p className="subtitle fs-500">The best gaming channel in the world</p>
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
                        <p className="body fs-400">With almost 3 million subscribers, Neebs Gaming is well on their way to producing some of the most watched gaming content on YouTube. My goal in this redesign was to showcase the gaming content, create a dedicated space for both live events and merchandise, and create a space for fans like me to geek out.</p>
                        <div className="project-buttons flow-horiz-xs">
                            <Button text="Website" href="https://github.com/Alliemack77/Neebs-Gaming" target="_blank" />
                            <Button text="Figma" href="https://www.figma.com/file/nJ5faYkdZJRgBsgfKy4bNf/Neebs-Gaming?node-id=0%3A1" target="_blank" />
                            <Button text="Github" href="https://github.com/Alliemack77/Neebs-Gaming" target="_blank" />
                        </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Neebs;