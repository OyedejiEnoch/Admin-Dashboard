import React from 'react'
import "./Widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Widget = ({type}) => {

    let data;

    //temporarily
    const amount = 100
    const diff= 20

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link:"See all users",
                icon: <AccountCircleIcon className="icon" 
                style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.2)"}}
                 /> 
            };
            break;

        case "order":
            data={
            title:"ORDERS",
            isMoney: false,
            link:"View all Orders",
            icon: <ShoppingCartIcon className="icon"
            style={{color:"goldenrod", backgroundColor:"rgba(218, 165, 32, 0.3)"}}
             /> 
        };
            break;

         case "earnings":
             data={
                title:"EARNINGS",
                isMoney: true,
                link:"View net Earnings",
                icon: <MonetizationOnIcon className="icon"
                style={{color:"green", backgroundColor:"rgba(0, 128, 128, 0.3)"}}
                 /> 
             };
            break;

            case "balance":
                data={
                     title:"BALANCE",
                     isMoney:true,
                     link:"View Balance",
                     icon: <AccountBalanceIcon className="icon"
                     style={{color:"purple", backgroundColor:"rgba(128, 0, 128, 0.2)"}}
                      /> 
                };
                 break;
            default:
            break;

    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"><KeyboardArrowUpIcon /> {diff}%</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget