import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
// import { FaCodepen } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Socialbar = () => {
    return (
        <div className="socialbar">
            <a href="https://github.com/Alliemack77" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a href="https://linkedin.com/in/allisonleggett" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
            </a>
            {/* <a href="https://codepen.io/your-work/" target="_blank" rel="noreferrer">
                <FaCodepen />
            </a> */}
            <a href="mailto:alliemack77@gmail.com" target="_blank" rel="noreferrer">
                <AiOutlineMail />
            </a>
        </div>
    )
}

export default Socialbar;