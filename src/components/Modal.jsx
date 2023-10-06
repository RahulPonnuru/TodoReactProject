import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import ItemContext from "../context/itemContext";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

const Modal = (props) => {
    const [updateTitle,setUpdateTitle]=useState(props.title)
    const [updateNote,setUpdatenote]=useState(props.note)
    const {setItem,item,changeState}=useContext(ItemContext);
    const [sucess,setSucess]=useState(false);
    const [showAlert,setShowAlert]=useState(false);
    const modifyItem=(id)=>{
        setItem(prev=>{
            return prev.map((item)=>{
                if(item.id==id){
                    console.log("types",item.types,"id",id)
                    return {
                    id:item.id,
                    title:updateTitle,
                    note:updateNote,
                    types:item.types,
                    }
                }else{
                    return item
                }
            })
        })
        setSucess(true)
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
    }
  return (
    <div className="modalBackground">
      <div className="alertDiv">
        {showAlert && (
          <Alert
            onClose={() => {
              setShowAlert(false);
            }}
          >
            <AlertTitle>Updated Sucessfully</AlertTitle>
            Updated the note sucessfully —{" "}
            <strong>check it out by filtering dropdown!</strong>
          </Alert>
        )}
      </div>
      <div className="modal">
        <button className="modalBtn" onClick={() => props.closeModal()}>
          <CloseIcon />
        </button>
        <label>Title</label>
        <input
          type="text"
          onChange={(event) => {
            setUpdateTitle(event.target.value);
          }}
          className="title"
          value={updateTitle}
          rows="1"
        ></input>
        <label>Note</label>
        <input
          className="title"
          onChange={(event) => {
            setUpdatenote(event.target.value);
          }}
          value={updateNote}
          rows="3"
        ></input>
        <button
          className="modalChangeBtn"
          style={{ color: sucess ? "green" : "red" }}
          onClick={(event) => {
            event.preventDefault(),
              modifyItem(props.id),
              changeState((prev) => {
                return !prev;
              });
          }}
        >
          <DoneAllIcon />
          Change
        </button>
      </div>
    </div>
  );
};

export default Modal;
