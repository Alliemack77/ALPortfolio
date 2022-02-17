// import { AiOutlineArrowRight } from 'react-icons/ai';

const Button = ({text, href}) => {
    return (
            <a className="button" href={href}>
                <p>{text}</p> 
                {/* <AiOutlineArrowRight /> */}
            </a>
    )
}

export default Button;