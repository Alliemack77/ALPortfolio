import {MdArrowForwardIos} from 'react-icons/md'
const ProjectNav = ({href, next}) => {
    return (
            <a href={href} className="project-nav">
                <div>
                    <h2 className="text-dark-blue ff-body fs-300">Next project</h2>
                    <div className="secondary-navigation flex">
                        <p className="text-dark-blue ff-heading fs-700" >{next}</p>
                        <MdArrowForwardIos />
                    </div>
                </div>
            </a>
    )
}

export default ProjectNav;