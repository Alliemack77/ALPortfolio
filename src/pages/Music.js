import Button from "../components/Button";
import Footer from "../components/Footer";

const Music = () => {
    return (
        <>
            <div className="project music">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">The Music Shop</h1>
                    <p className="subtitle fs-500">Having fun with css properties</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            personal project</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            Web design</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            June 2021</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">With almost 3 million subscribers, Neebs Gaming is well on their way to producing some of the most watched gaming content on YouTube. My goal in this redesign was to showcase the gaming content, create a dedicated space for both live events and merchandise, and create a space for fans like me to geek out.</p>
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