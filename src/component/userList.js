//import SideBar from "./sidebar";
import "../styles/booklist.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserList = (props) => {
  let users = props.data;

let location = useLocation()
  let [user, setUser] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:3000/admin-portal/user-list");
      let resData = await response.json();
      setUser(resData);
    };
    fetchData();
  }, [user]);

  let handleDelete = (id)=>{
    fetch(`http://localhost:3000/admin-portal/user-list/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(user)
    })
    // window.location.reload(); //reload the page

  }

  let hide =(id) => {
    setUser(user.filter(item => item.id !== id ))
  }

  return (
    <div className="userlist">
      <div className="title">
        <h1>User List</h1>
      </div>
      {book.map((data) => (
        <div className="list">
          <div className="list-item">
            <h1>
              {data.title}
            </h1>
            <p>{data.NAME}</p>
            <p>{data.PHONE-NUMBER}</p>
            <P>{data.EMAIL-ID}</P>
            <P>{data.ADDRESS}</P>
            {location.pathname == '/admin-portal/user-list' && <button onClick={()=>handleDelete(data.id)}>Delete</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
