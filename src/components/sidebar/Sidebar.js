import React, { useContext } from 'react'
import "./SideBar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';

const SideBar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
      <Link to={"/"} style={{textDecoration:"none"}}>
      <span className="logo"> Dashbord</span>
      </Link>
      </div>
      <hr />
      <div className="center">
          <ul>
          <p className="title">MAIN</p>
            <li>
            <DashboardIcon className="icon" />
              <span>Dashbord</span>
            </li>

            <p className="title">LISTS</p>
            <Link to={"/users"} style={{textDecoration:"none"}}>
            <li>
            <GroupIcon className="icon" />
              <span>Users</span>
            </li>
            </Link>

            <Link to={"/products"} style={{textDecoration:"none"}}>
            <li>
            <ShoppingCartIcon className="icon" />
              <span>Products</span>
            </li>
            </Link>

            <Link to={"/products"} style={{textDecoration:"none"}}>
            <li>
            <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
            </Link>

            
            <li>
            <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <li>
            <BarChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
            <NotificationsActiveIcon className="icon" />
              <span>Notification</span>
            </li>

            <p className="title">SERVICE</p>
            <li>
            <MonitorHeartIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
            <WorkHistoryIcon className="icon" />
              <span> Logs</span>
            </li>
            <li>
            <SettingsApplicationsIcon className="icon"/>
              <span>Settings</span>
            </li>

            <p className="title">USER</p>
            <li>
            <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
            <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
      
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default SideBar
