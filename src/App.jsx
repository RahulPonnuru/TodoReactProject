import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import NoteMaker from './components/NoteMaker'
import ItemContextProvider from './context/itemContextProvider'
import Notes from './components/Notes'
import ItemContext from './context/itemContext'
import SelectType from './components/SelectType'
import Alert from "@mui/material/Alert";
import { AlertTitle } from '@mui/material';

function App() {
  const {setItem,item,state,changeState} =useContext(ItemContext);
  const [selectedType, setSelectedType] = useState("");
  const [showItems,setShowItems]=useState([]);
  const [showAlert,setShowAlert]=useState(false);
  const [showDeleteAlert,setShowDeleteAlert]=useState(false);
  const noteDelete=(id)=>{
    setItem((prev)=>{
      return prev.filter((item)=>{
        return item.id!=id;
      })
    })
    setShowDeleteAlert(true);
    changeState(prev=>{
      return !prev;
    })
    setTimeout(() => {
      setShowDeleteAlert(false);
    }, 5000);
  }
  
  const types=["Studies","Movies","Hobbies"]
  const typesSorted=types.sort();
  useEffect(()=>{
    console.log("selected",selectedType)
    let notes;
    if(selectedType=="All"){
      notes=item;
    }else if(selectedType=="Three types choosen"){
      notes = item.filter((note) => {
        let noteSort = note.types.sort();
        // let bool = JSON.stringify(noteSort) == JSON.stringify(typesSorted);
        return JSON.stringify(noteSort) == JSON.stringify(typesSorted);
      });
    }else{
      notes = item.filter((note) => {
        let ans= note.types.filter(val=>{
          console.log((selectedType==val),val,selectedType)
          return selectedType==val
        })
        console.log("ansnss",ans);
        return ans[0];
      });
      console.log("notes",notes);
    }
    setShowItems(notes)
  },[selectedType,state])
  return (
    <div className="top">
      <Navbar />
      {showDeleteAlert && (
        <Alert
          onClose={() => {
            setShowDeleteAlert(false);
          }}
        >
          <AlertTitle>Sucessfully deleted</AlertTitle>
          <strong>Deleted</strong> the note sucessfully
        </Alert>
      )}
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          <AlertTitle>Sucessfully added</AlertTitle>
          Added the note sucessfully —{" "}
          <strong>check it out by filtering dropdown!</strong>
        </Alert>
      )}
      <NoteMaker
        setShowAlert={setShowAlert}
        types={types}
        changeSelectedType={(selectType) => {
          setSelectedType(selectType);
        }}
        selectedType={selectedType}
      />
      <SelectType
        changeSelectedType={(selectType) => {
          setSelectedType(selectType);
        }}
        types={types}
      />
      <div className="container">
        {console.log(item)}
        {showItems.map((val, index) => {
          return (
            <Notes
              key={index}
              id={val.id}
              title={val.title}
              note={val.note}
              types={val.types}
              noteDelete={(delId) => {
                noteDelete(delId);
              }}
            ></Notes>
          );
        })}
      </div>
    </div>
  );
}

export default App
