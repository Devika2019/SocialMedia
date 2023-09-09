import React from 'react';
import "./closeFriend.css";

export default function ({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='sidebarFriend'>
            <img src={PF+user.profileImg} alt='' className='sidebarFriendImg' />
            <span className='sidebarFriendName'>{user.userName}
            </span>
        </li>
    )
}
