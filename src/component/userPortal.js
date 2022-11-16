import { Routes, Route } from "react-router-dom";
import UserSideBar from "./usersidebar";
import AdminHome from "./adminHome";
import UserList from "./userList";
import '../styles/userportal.css'


const UserPortal = () => {
  let users = props.data;
    return ( 
        <div className="userportal">
             <div className="left">
        <UserSideBar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
        </div>
     );
}
 
export default UserPortal;