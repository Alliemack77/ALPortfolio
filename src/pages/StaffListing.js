import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectNav from "../components/ProjectNav";
import Footer from "../components/Footer";
import {AiFillHtml5 } from 'react-icons/ai';
import {DiCss3 } from 'react-icons/di';
import {SiSubstack} from 'react-icons/si';


const StaffListing = () => {
    return (
        <>
            <Navbar isProject/>
            <div className="project staff-listing">
                <header className="header grid">
                    <h1 className="title fs-900 fw-700 ff-heading">Staff Listing</h1>
                    <p className="subtitle fs-500">A Flexible Component Using Container Queries</p>
                    <div className="role">
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Role </span> 
                            frontend development</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Context </span> 
                            component development</p>
                        <p className="ff-heading uppercase fw-300">
                            <span className="text-orange fw-700">Period </span> 
                            February 2023</p>
                    </div>
                </header>
                <main className="description flex direction-column">
                        <h2 className="fs-800 ff-heading">The Project</h2>
                        <p className="body fs-400">I built this component for the CMS at Goucher College. The component needed to be capable of handling any amount of content while maintaining a 1:3 image to text ratio. Using Grid and the new CSS Container Queries, this component adjusts its layout based on its own width and not the width of the viewport. Check out my Substack below where I go into more detail about how I built this compponent.</p>
                        <div className="tech-icons flex">
                            <p>Tech stack:</p>
                            <AiFillHtml5 /> 
                            <DiCss3 /> 
                            <SiSubstack />
                        </div>
                        <div className="flow-horiz-xs flow-xs">
                            <Button text="CodePen" href="https://codepen.io/alliemack/pen/ExejKeG?editors=1100" target/>
                            <Button text="Substack" href="https://allisonleggett.substack.com/p/building-a-responsive-component-using" target/>
                            <Button text="Github" href="https://github.com/Alliemack77/staff-listing" target/>
                        </div>
                </main>
                <ProjectNav href="/github-user-search" next="GitHub User Search"/>
                <Footer />
            </div>
        </>
    )
}

export default StaffListing;