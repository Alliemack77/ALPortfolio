import { useState } from 'react';
import logo from '../images/logo-lrg.png'
import { Link } from 'react-scroll';
import { Link as Linkhome } from 'react-router-dom';


const Navbar = ({isProject}) => {

    const [isToggled, setIsToggled]  = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    return (
        
        <header className="primary-header">
            <div className="flex">
                <Linkhome to="/">
                    <img className="logo" src={logo} alt="Allison Leggett"/>
                </Linkhome>
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
                            <li>
                                <Linkhome onClick={handleClick} className="ff-heading" to="/" activeclass="active" smooth="true">
                                        Home
                                </Linkhome>
                            </li>
                            {isProject? (
                                // <li>
                                //     <Link onClick={handleClick} className="ff-heading" to="case-studies" smooth="true">
                                //             Case Studies
                                //     </Link>
                                // </li>
                                null
                            ) : (
                                <li>
                                    <Link onClick={handleClick} className="ff-heading" to="case-studies" smooth="true">
                                            Case Studies
                                    </Link>
                                </li>
                            )}
                            
                            {/* <li>
                                <Link onClick={handleClick} className="ff-heading" to="experiments" smooth={true}>
                                        Experiments
                                </Link>
                            </li> */}
                            <li>
                                <Link onClick={handleClick} className="ff-heading" to="contact" smooth="true">
                                        Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>


    )
}

export default Navbar;