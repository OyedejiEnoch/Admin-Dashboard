import React, {useState} from 'react'
import "./New.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const New = ({inputs, title}) => {

  const [file, setFile]= useState("")

  return (
    <div className="new">
      <Sidebar />
      <div className="sidebarContainer">
        <Header />
        <div className="top" >
          <h1>{title}</h1>
        </div>
        <div className="bottom" >
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : 
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            } alt="image" />
          </div>

          <div className="right">
            <form>
            {inputs.map(input =>(
            <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
          ))}
             
              <div className="formInput">
                <label htmlFor="file"  >Image: <CreateNewFolderIcon className="icon" /> </label>
                <input type="file" id="file" onChange={e=> setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New