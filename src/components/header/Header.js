import React, { useContext } from 'react'
import "./Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LanguageIcon from '@mui/icons-material/Language';
import { DarkModeContext } from '../../context/darkModeContext';

const Header = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon  />
        </div>

        <div className="items">
          <div className="item">
          <LanguageIcon className="icon" />
          English
          </div>
          <div className="item">
          <NightlightRoundIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})} />
          
          </div>
          <div className="item">
          <FullscreenIcon className="icon" />
          
          </div>
          <div className="item">
          <NotificationsIcon className="icon" />
          <div className="counter">1</div>
          </div>

          <div className="item">
          <ChatBubbleIcon className="icon" />
          <div className="counter">2</div>
          </div>
         
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1680951103843-a370c042fb03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="image"
              className="avatar"
             />
    
          </div>
          
          <div className="item">
          <FormatListBulletedIcon className="icon" />
    
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header