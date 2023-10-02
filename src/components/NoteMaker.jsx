import { useContext, useState } from "react"
import ItemContext from "../context/itemContext";
import AddIcon from "@mui/icons-material/Add";

const NoteMaker=()=>{
    const [title,setTitle]=useState("");
    const [note,setNote]=useState("");
    const {setItem,item}=useContext(ItemContext);
    const [wrap,setWrap]=useState(false);
    const changeWrap=()=>{
        setWrap(true);
    }
    const addItem=()=>{
        setItem((prev)=>{
            return[
                ...prev,
                {title:title,note:note},
            ]
        })
        setTitle("");
        setNote("");
        console.log(item);
    }
    return (
      <div className="noteMaker">
        <div className="inputBox">
          <div className="inputs">
            {wrap && (
              <textarea
                placeholder="Title"
                className="title"
                value={title}
                rows="1"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></textarea>
            )}
            <textarea
              placeholder="Take a note.."
              value={note}
              className="note"
              onChange={(event) => {
                setNote(event.target.value);
              }}
              onClick={changeWrap}
              rows={wrap?3:1}
            ></textarea>
            <button type="submit" className="btn" onClick={addItem}><AddIcon/></button>
          </div>
        </div>
      </div>
    );
}

export default NoteMaker;