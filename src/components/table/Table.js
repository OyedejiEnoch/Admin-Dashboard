import React from 'react'
import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id:1,
            product:"Air pods pro",
            customer:"John Smith",
            img:"https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            date: "1 March",
            amount: 120,
            method: "Online Payment",
            status:"Approved"
       },
       {
        id:2,
        product:"Doggas shirt",
        customer:"Allan Susan",
        img:"https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        date: "1 March",
        amount: 620,
        method: "Cash on Delivery",
        status:"Approved"
        },
        {
            id:3,
            product:"Iphone 14pro",
            customer:"Rihana jones",
            img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            date: "1 March",
            amount: 620,
            method: "Cash on Delivery",
            status:"Pending"
       },
       {
        id:4,
        product:"Nike Kit",
        customer:"Ellen Ruue",
        img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        date:  "1 March",
        amount: 620,
        method: "Cash on Delivery",
        status:"Pending"
        },
      ];



  return (
    <div >
       <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row" className='tableCell'>
                {row.id}
              </TableCell>
            
              <TableCell className='tableCell' >
                <div className="cellWrapper" >
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell' >{row.customer}</TableCell>
              <TableCell className='tableCell' >{row.date}</TableCell>
              <TableCell className='tableCell' >{row.amount}</TableCell>
              <TableCell className='tableCell' >{row.method}</TableCell>
              <TableCell className='tableCell' ><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List
