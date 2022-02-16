import Button from "./Button";


const Tile = ({img, title, subtitle, className, href}) => {
    return (
        <div className="tile"  style={{backgroundImage: "url(" + img + ")"}} alt="" >
            <div className={`heading flex direction-column ${className}`}>
                <h3 className="ff-heading fs-700">{title}</h3>
                <p className="subtitle fw-300">{subtitle}</p>
                <Button text="Case study" href={href}/>
            </div>
        </div>
    )
}

export default Tile;