import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Righbar from '../../components/rightbar/Righbar';
import './profile.css';
import axios from "axios";
import {useParams} from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(()=>{
    const fetchUser = async()=>{
const res = await axios.get(`/users?username=${username}`);
setUser(res.data);
    };fetchUser();
  },[username])
  return (
    <>
     <Topbar/>
     <div className='profile'>
     <Sidebar/>
        <div className='profileRight'>
            <div className='profileRightTop'>
                <div className='profileCover'>
<img className='profileCoverImg' src={user.coverPicture || PF+"profiles/No_Cover.jpg"} alt='' />
<img className='profileUserImg' src={PF +user.profilePicture || PF+"profiles/noavatar.jpg"} alt='' />
                </div>
                <div className='profileInfo'>
                  <h4 className='profileInfoName'> {user.username} </h4>
                  <span className='profileInfoDesc'> {user.desc}</span>

                </div>
            </div>
            <div className='profileRightBottom'>
            <Feed username ={username}/>
    <Righbar user={user}/>
            </div>

        </div>
    
    
     </div>
    
    </>
  )
}
