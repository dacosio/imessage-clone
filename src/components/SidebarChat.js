import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/SidebarChat.css'

const SidebarChat = () => {
  return (
    <div className='sidebarChat'> 
      <Avatar />
      <div className="sidebarChat__info">
        <h3>Channel Name</h3>
        <p>Last message..</p>
        <small>timestamp</small>
      </div>
    </div>
  )
}

export default SidebarChat
