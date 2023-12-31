import React from 'react'
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
    const { user ,dispatch } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const navigate = useNavigate(); 
   
    const handleLogout =()=>{
    dispatch({
        type: "LOGIN_FAILURE"
    })
        navigate("/login");    
    }
    return (
        <div className='topbarContiner'>

            <div className='topbarLeft'>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <span className='logo'>
                        Social App
                    </span>
                </Link>

            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input placeholder='Search for freind' className='searchInput' />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat />
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "profiles/noavatar.jpg"
                        }
                        alt=""
                        className="topbarImage"
                    />
                </Link>
                
                    <button onClick={handleLogout}>Logout</button>
                
            </div>
        </div>

    )
}
