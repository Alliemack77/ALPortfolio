import logo from '../images/logo-lrg.png'

const Footer = () => {
    return (
        <footer id="contact" className="flex direction-column">
            <img className="logo" src={logo} alt="Allison Leggett"/>
            <ul className="underline-indicators flex">
                <li><a className="ff-heading" href="https://github.com/Alliemack77" target="_blank" rel="noreferrer">Github</a></li>
                <li><a className="ff-heading" href="https://linkedin.com/in/allisonleggett" target="_blank" rel="noreferrer">LinkedIn</a></li>
                {/* <li><a className="ff-heading" href="https://codepen.io/your-work/" target="_blank" rel="noreferrer">Codepen</a></li> */}
                <li><a className="ff-heading" href="mailto:alliemack77@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
            </ul>
        </footer>
    )
}

export default Footer;