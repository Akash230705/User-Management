import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaBuilding, FaGlobe } from "react-icons/fa";
import "./UserCard.css";

function UserCard({ user, onEdit, onDelete }) {

  const initials = user.name
    ? user.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="user-card">

        <div className="user-left">
            <div className="avatar">
                {user.name.charAt(0)}
            </div>

            <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>

        <div className="user-middle">
            <span>{user.phone}</span>
            <span>{user.company}</span>
            <span>{user.website}</span>
        </div>

        <div className="user-actions">
            <Link to={`/users/view/${user.id}`} className="view-btn">
                View
            </Link>
            <button className="edit-btn" onClick={() => onEdit(user)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
        </div>

    </div>
  );
}

export default UserCard;