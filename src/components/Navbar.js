import { useState } from 'react';
import logo from '../images/Triangle 8.png'



const Navbar = () => {

    const [isToggled, setIsToggled]  = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    return (
        
        <header className="primary-header">
            <div className="flex">
                <img className="logo" src={logo} alt="Allison Leggett"/>
                <div className={`${isToggled ? "nav-open" : ""}`}>
                    <button
                        className="mobile-nav-toggle"
                        aria-controls="primary-navigation"
                        onClick={handleClick}
                    >
                        <span className="hamburger sr-only"></span>
                    </button>
                    <nav>
                        <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                            <li onClick={handleClick}>
                                <a className="ff-heading" href="https://www.google.com/">Case Studies</a>
                            </li>
                            <li onClick={handleClick}>
                                <a className="ff-heading" href="https://www.google.com/">Experiments</a>
                            </li>
                            <li onClick={handleClick}>
                                <a className="ff-heading" href="https://www.google.com/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>


    )
}

export default Navbar;