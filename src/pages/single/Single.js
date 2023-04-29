import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
import "./Single.scss"

const Single = () => {
  return (
    <div className='single' >
      <Sidebar />
      <div className='singleContainer' >
        <Header />
        <div className="top">
          <div className="left" >
            <div className="editButton" >Edit</div>
             <h1 className="title">Information</h1>
              <div className="item">
               <img
               className="itemImg"
               src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
               alt="image" />

               <div className="details">
                <h1 className="itemTitle" >Ballack Joue</h1>
                <div className="detailItem">
                  <span  className="itemKey">Email:</span>
                  <span  className="itemValue">ballack@gamil.com</span>
                </div>

                <div className="detailItem">
                  <span  className="itemKey">Phone:</span>
                  <span  className="itemValue">+144 232 3384</span>
                </div>

                <div className="detailItem">
                  <span  className="itemKey">Address:</span>
                  <span  className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>

                <div className="detailItem">
                  <span  className="itemKey">Country:</span>
                  <span  className="itemValue">Usa</span>
                </div>
               </div>
               
            </div>
          </div>
          <div className="right" >
            <Chart aspect={3/1} title="User Spending Last 6months"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>

    </div>
  )
}

export default Single