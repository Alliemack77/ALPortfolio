import Button from '../components/Button'
import Socialbar from '../components/Socialbar'
import logo from '../images/Triangle 8.png'

const Home = () => {
    return (
        <>
       
        <div className="container">
            <section className="hero">
                <div class="hero-grid">
                    <h1 className="title fs-900 ff-heading">Allison Leggett</h1>
                    <p className="subtitle fs-500">Web Developer & Designer</p>
                    <Button className="button" text="About Me" />
                    <img className="icon" src={logo} alt=""></img>
                </div>
                <Socialbar />
            </section>
        </div>
        <main> 
            <div className="container">
                <h2 className="text-dark-blue fs-400 fw-700 uppercase">Case Studies</h2>
                <p className="text-dark-blue ff-heading fs-900 fw-500">Latest Works</p>

                {/* latest works cards */}

                

            </div>
        
        </main>
        </>

        
    )
}

export default Home; 