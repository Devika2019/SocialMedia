import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Righbar from '../../components/rightbar/Righbar';
import './home.css';

export default function Home() {
  return (
    <>
     <Topbar/>
     <div className='homeContainer'>
     <Sidebar/>
    <Feed/>
    <Righbar/>
     </div>
    
    </>
   
  )
}
