
const Experiment = ({image, title, id, url}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="card flex direction-column">
                <div className="image" style={{backgroundImage: "url("+ image + ")"}}></div>
                <div className="body flex align-center">
                    <div>
                        <h3 className="ff-body fs-300 fw-700 text-dark-blue uppercase">Title</h3>
                        <p className="ff-heading fs-300 text-dark-blue">{title}</p>
                    </div>
                    <p className="fs-700 fw-700 text-orange">{id}</p>
                </div>
            </div>
        </a>
    )
}

export default Experiment