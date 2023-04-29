import React from 'react'
import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontsize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"}  strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$460</p>
        <p className="desc">Previous transactions processing. Last payments may not 
        be included
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Today</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize="small" />
                    <div className="itemResult">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize="small" />
                    <div className="itemResult">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Month</div>
                <div className="itemResult positive ">
                    <KeyboardArrowUpIcon fontSize="small" />
                    <div className="itemResult">$12.4k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured