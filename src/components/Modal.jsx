import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import ItemContext from "../context/itemContext";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const Modal = (props) => {
    const [updateTitle,setUpdateTitle]=useState(props.title)
    const [updateNote,setUpdatenote]=useState(props.note)
    const {setItem,item}=useContext(ItemContext);
    const [sucess,setSucess]=useState(false);
    const modifyItem=(id)=>{
        setItem(prev=>{
            return prev.map((item,index)=>{
                if(index==id){
                    return {
                    title:updateTitle,
                    note:updateNote,
                    }
                }else{
                    return item
                }
            })
        })
        setSucess(true)
    }
  return (
    <div className="modalBackground">
      <div className="modal">
        <button className="modalBtn" onClick={() => props.closeModal()}>
          <CloseIcon />
        </button>
        <label>Title</label>
        <input type="text" onChange={(event)=>{setUpdateTitle(event.target.value)}} className="title" value={updateTitle} rows="1"></input>
        <label>Note</label>
        <input className="title" onChange={(event)=>{setUpdatenote(event.target.value)}} value={updateNote} rows="3"></input>
        <button className="modalChangeBtn" style={{color:sucess?"green":"red"}} onClick={(event)=>{event.preventDefault(),modifyItem(props.id)}}>
          <DoneAllIcon/>Change
        </button>
      </div>
    </div>
  );
};

export default Modal;
