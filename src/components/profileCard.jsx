import "./profileCard.css"

export default function ProfileCard(props){
    return(
        <article className="profile-card">
            <div className="master-container">
                <div className="master-content-holder">
                <div className="image-holder">
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className="content-holder">
                    <ul className="profile-content">
                        <li className="username">Name:{props.name}</li>
                        <li className="dept">Dept:{props.dept}</li>
                        <li className="batch">Batch:{props.batch}</li>
                        <li className="role">Role:{props.role}</li>
                    </ul>
                </div>
                </div>
                <div className="status">
                    <ul className="profile-status">
                        <li className="is-active">{props.isActive}</li>
                        <li className="connection">{props.connections}</li>
                    </ul>
                </div>
            </div>
        </article>
    )
}