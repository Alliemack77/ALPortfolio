import Button from "./Button";


const Tile = ({imgSmall, title, subtitle, href}) => {
    return (
        <div className="tile" style={{backgroundImage: "url(" + imgSmall + ")"}}>
            <div className="heading flex direction-column">
                <h3 className="title ff-heading fs-700">{title}</h3>
                <p className="subtitle fw-300">{subtitle}</p>
                <Button text="Case Study" href={href}/>
            </div>
        </div>
    )
}

export default Tile;