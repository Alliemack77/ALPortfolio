
const Button = ({text, href, onClick, target}) => {
    return (
            <a className="button" href={href} onClick={onClick} target={target ? "_blank" : null} rel="noreferrer">
                <p>{text}</p> 
            </a>
    )
}

export default Button;