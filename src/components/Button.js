
const Button = ({text, href, onClick}) => {
    return (
            <a className="button" href={href} onClick={onClick}>
                <p>{text}</p> 
            </a>
    )
}

export default Button;