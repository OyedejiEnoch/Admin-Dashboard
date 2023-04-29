export const userColumns=[
    {field: 'id', headerName: 'ID', width: 70 },
    {field:"user", headerName:"User", width:230, renderCell:(params)=>{
        return(
        
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            
        )
      }},

      {field: 'email', headerName: 'Email', width: 230 },
      {field: 'age', headerName: 'Age', width: 100 },
      {field: 'status', headerName: 'Status', width: 160, renderCell:(params)=>{
        return(
        
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
            
        )
      } },

]



export const userRows= [
    {
        id:1,
        username:"John Smith",
        img:"https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        email: "john@gmail.com",
        age: 24,
        status:"Active"
   },
   {
    id:2,
    username:"Allan Susan",
    img:"https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    email: "allan@gmail.com",
    age: 20,
    status:"Active"
    },
    {
        id:3,
        username:"Rihana jones",
        img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        email: "rihana@gmail.com",
        age: 32,
        status:"Passive"
   },
   {
    id:4,
    username:"Ellen Ruue",
    img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    email:  "ellen@gmail.com",
    age: 24,
    status:"Passive"
    },
   {
    id:5,
    username:"James Posh",
    img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    email:  "posh@gmail.com",
    age: 24,
    status:"Active"
    },
   {
    id:6,
    username:"Nickolie Jones",
    img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    email:  "Nikolie@gmail.com",
    age: 24,
    status:"Passive"
    },
   {
    id:7,
    username:"Grabriel Martinez",
    img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    email:  "grabriel@gmail.com",
    age: 24,
    status:"Active"
    },
  ];