import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import "./Home.scss"
import Table from '../../components/table/Table'



const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
    <Header />
      <div className="widgets">
      <Widget type="user" />
      <Widget type="order" />
      <Widget type="earnings" />
      <Widget type="balance" />
      </div>

      <div className="charts">
        <Featured />
        <Chart aspect={2/1} title="Revenue of Last 6Months" />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </div>
    </div>
  )
}

export default Home

// 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