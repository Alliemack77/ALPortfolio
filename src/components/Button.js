import { AiOutlineArrowRight } from 'react-icons/ai';

const Button = ({text}) => {
    return (
            <a className="button" href="https://www.google.com/">
                {text} 
                <AiOutlineArrowRight />
            </a>
    )
}

export default Button;