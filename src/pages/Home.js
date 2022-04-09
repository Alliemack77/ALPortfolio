import { useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Socialbar from '../components/Socialbar'
import Tile from '../components/Tile'
import AboutMe from '../components/AboutMe'
import Navbar from '../components/Navbar'
import Experiment from '../components/Experiment'
import logo from '../images/logo-lrg.png'
import { caseStudies } from '../data/caseStudy-data'
import {experiments} from '../data/experiments-data'

const Home = () => {

    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
       <Navbar />
        <div className="container">
            <section className="hero">
                <header className="hero-grid">
                    <h1 className="title fs-900 ff-heading">Allison Leggett</h1>
                    <p className="subtitle fs-500">Web Developer & Designer</p>
                    <Button text="About Me"  onClick={handleClick}/>
                    {showDetails? <AboutMe onClick={handleClick} /> : null}
                    <img className="icon" src={logo} alt=""></img>
                </header>
                <Socialbar />
            </section>
        </div>
        <main className="home"> 
            <div id="case-studies" className="container">
                <section className="case-studies">
                    <header className="secondary-header">
                        <h2 className="title text-dark-blue fs-400 fw-700 uppercase">Case Studies</h2>
                        <p className="text-dark-blue ff-heading fs-700 fw-500">Latest Work</p>
                    </header>
                    <div className="tiles">
                        {
                            caseStudies.map((item, index) => {
                                if (index === 0 || index % 2 === 0) {
                                    return (
                                        <Tile {...item}  key={item.title} />
                                    )
                                }else {
                                    return (
                                        <Tile {...item} key={item.title} />
                                    )
                                }
                        
                            })
                        }
                    </div>
                </section>
            </div>

            <div id="experiments" >
                <section className="experiments">
                    <header className="secondary-header">
                        <h2 className="title text-dark-blue fs-400 fw-700 uppercase">Experiments</h2>
                        <p className="text-dark-blue ff-heading fs-700 fw-500">Fun mini projects</p>
                    </header>

                    <div className="cards">
                        {
                            experiments.map(experiment => {
                                return (
                                    <Experiment key={experiment.id} {...experiment} />
                                )
                            })
                        }
                       
                        
                    </div>
                </section>
            </div>
            
        </main>

        <Footer />
        </>

        
    )
}

export default Home; 