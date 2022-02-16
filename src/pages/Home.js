import Button from '../components/Button'
import Socialbar from '../components/Socialbar'
import Tile from '../components/Tile'
import logo from '../images/logo-lrg.png'
import { caseStudies } from '../data/caseStudy-data';

const Home = () => {
    return (
        <>
       
        <div className="container">
            <section className="hero">
                <div className="hero-grid">
                    <h1 className="title fs-900 ff-heading">Allison Leggett</h1>
                    <p className="subtitle fs-500">Web Developer & Designer</p>
                    <Button className="button" text="About Me" />
                    <img className="icon" src={logo} alt=""></img>
                </div>
                <Socialbar />
            </section>
        </div>
        <main > 
            <div id="case-studies" className="container">
                <h2 className="text-dark-blue fs-400 fw-700 uppercase">Case Studies</h2>
                <p className="text-dark-blue ff-heading fs-900 fw-500">Latest Works</p>
              
                {
                    caseStudies.map((item, index) => { 
                        if (index === 0 || index % 2 === 0) {
                            return (
                                <Tile key={item.title} img={item.img} title={item.title} subtitle={item.subtitle} href={item.href} className="justify-end align-end"/>
                            )
                        }else {
                            return (
                                <Tile key={item.title} img={item.img} title={item.title} subtitle={item.subtitle} href={item.href} className="justify-end"/>
                            )
                        }
                        
                    })
                }
               

                

            </div>

            <div id="experiments" className="container">
                <h2 className="text-dark-blue fs-400 fw-700 uppercase">Experiments</h2>
                <p className="text-dark-blue ff-heading fs-900 fw-500">Fun mini projects</p>
                


                {/* latest experiments 
                */}

                

            </div>
        </main>
        </>

        
    )
}

export default Home; 