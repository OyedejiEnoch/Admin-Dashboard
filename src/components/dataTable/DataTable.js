import React, { useState } from 'react'
import "./DataTable.scss"
import { DataGrid, } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../dataTable";
import {Link} from "react-router-dom"



const DataTable = () => {

  const [data, setData] = useState(userRows)

  const handleDelete=(id)=>{
    setData(prevValue=>{
      return prevValue.filter((value)=>{
        return value.id !== id
      })
    })
  }


    const actionColumn = [ {field: 'action', headerName: 'Actions', width: 230, renderCell:(params)=>{
        return(
        
            <div className="cellAction">
            <Link to={"/users/test"} style={{textDecoration:"none"}}>
                <div className="viewButton" >View</div>
                </Link>
                <div className="deleteButton" onClick={()=> handleDelete(params.row.id)} >Delete</div>
            </div>
            
        )
      } }]

  return (
    <div className="dataTable" >
      <div className="dataTableTitle">
        Add New User 
        <Link to="/users/new" className="link" style={{textDecoration:"none"}} >
          Add New
        </Link>
      </div>
         <DataGrid
         className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable