import React from 'react'
import "./List.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import DataTable from "../../components/dataTable/DataTable";

const List = () => {
  return (
    <div className="list">
     <Sidebar />
     <div className="listContainer" >
      <Header />
      <DataTable />
     </div>
    </div>
  )
}

export default List
