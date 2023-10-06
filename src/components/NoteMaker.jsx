import { useContext, useEffect, useState } from "react"
import ItemContext from "../context/itemContext";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { amber } from "@mui/material/colors";
import ChangeView from "./ChangeView";
import { v4 as uuidv4 } from "uuid";

const NoteMaker = ({
  types,
  changeSelectedType,
  selectedType,
  setShowAlert,
}) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { setItem, item, selectedItem, setSelectedItem, state, changeState } =
    useContext(ItemContext);
  const [wrap, setWrap] = useState(false);

  const changeWrap = () => {
    setWrap(true);
  };

  const addItem = () => {
    // console.log(selectedItem);
    setItem((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          title: title,
          note: note,
          types: selectedItem,
        },
      ];
    });
    let itemPresent = selectedItem.filter((item) => {
      return item == selectedType;
    });
    // console.log("Present",itemPresent)
    if (itemPresent.length == 1) {
      // console.log("hellloooooooooooooooooooooooooooooooooo",selectedItem,selectedType,itemPresent)
      // changeSelectedType(selectedItem);
      changeState((prev) => {
        return !prev;
      });
    } else if (selectedType == "All") {
      changeState((prev) => {
        return !prev;
      });
    } else if (
      selectedType == "Three types choosen" &&
      selectedItem.length == 3
    ) {
      changeState((prev) => {
        return !prev;
      });
    }
    setShowAlert(true);
    setTitle("");
    setNote("");
    console.log(item);
    setTimeout(()=>{
      setShowAlert(false)
    },5000)
  };
  return (
    <div className="noteMaker">
      <div className="inputBox">
        <ChangeView types={types} />
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
            rows={wrap ? 3 : 1}
          ></textarea>
          {/* <Fab size="medium" className="btn" onClick={addItem} aria-label="add">
            <AddIcon />
          </Fab> */}
          <button
            type="submit"
            title="addBtn"
            onClick={addItem}
            className="btn"
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteMaker;