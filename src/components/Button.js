import { AiOutlineArrowRight } from 'react-icons/ai';

const Button = ({text}) => {
    return (
            <a className="button" href="#">
                {text} 
                <AiOutlineArrowRight />
            </a>
    )
}

export default Button;