import { Link } from "react-router-dom";
import "../styles/usersidebar.css";

const UserSideBar = () => {
  return (
    <div className="user-sidebar">
      <div className="user">
        <div className="image">
          <img
            src="https://cdn.icon-icons.com/icons2/1392/PNG/96/female-avatar_96627.png"
            alt=""
          />
        </div>
        <div className="userName">
          <p>Admin</p>
          <p>user@gmail.com</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/user-portal/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user-portal/book-list" className="link">
              Book List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserSideBar;