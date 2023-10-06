import { useContext, useState } from "react"
import ItemContext from "../context/itemContext"
import Modal from "./Modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Notes=({id,title,note,noteDelete,types})=>{
    const [modalBtn,setModalBtn]=useState(false);
    const closeModal=()=>{
        setModalBtn(false);
    }
    return (
      <div className="noteBox">
        <p className="boxTit">{title}</p>
        <p className="boxNote">{note}</p>

        {types.map((type) => {
          return <p className="cardTypeName">{type}</p>;
        })}

        <div className="noteBtns">
          <ModeEditIcon
            className="editBtn"
            onClick={() => {
              setModalBtn(true);
            }}
          />

          {modalBtn && (
            <Modal
              title={title}
              id={id}
              note={note}
              closeModal={closeModal}
            ></Modal>
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
      </div>
    );
}

export default Notes;