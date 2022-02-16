import { AiOutlineArrowRight } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

const Button = ({text, href}) => {
    return (
            <a className="button" href={href}>
                {text} 
                <AiOutlineArrowRight />
            </a>
    )
}

export default Button;