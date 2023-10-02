import { useContext, useState } from "react"
import ItemContext from "../context/itemContext"
import Modal from "./Modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Notes=({id,title,note,noteDelete})=>{
    const [modalBtn,setModalBtn]=useState(false);
    const closeModal=()=>{
        setModalBtn(false);
    }
    return (
      <div className="noteBox">
        <p className="boxTit">{title}</p>
        <p className="boxNote">{note}</p>

          <ModeEditIcon className="editBtn"
            onClick={() => {
              setModalBtn(true);
            }}
          />
        
        {modalBtn && (
          <Modal title={title} id={id} note={note} closeModal={closeModal}></Modal>
        )}
        <button
          className="boxBtn"
          onClick={() => {
            noteDelete(id);
          }}
        >
          DELETE
        </button>
      </div>
    );
}

export default Notes;