import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
// import { FaCodepen } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Socialbar = () => {
    return (
        <div className="socialbar">
            <a href="https://github.com/Alliemack77">
                <BsGithub />
            </a>
            <a href="www.linkedin.com/in/allisonleggett">
                <FaLinkedinIn />
            </a>
            {/* <a href="">
                <FaCodepen />
            </a> */}
            <a href="mailto:alliemack77@gmail.com">
                <AiOutlineMail />
            </a>
        </div>
    )
}

export default Socialbar;