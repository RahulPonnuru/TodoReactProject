import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import NoteMaker from './components/NoteMaker'
import ItemContextProvider from './context/itemContextProvider'
import Notes from './components/Notes'
import ItemContext from './context/itemContext'


function App() {
  const {setItem,item} =useContext(ItemContext);
  const noteDelete=(id)=>{
    setItem((prev)=>{
      return prev.filter((item,index)=>{
        return index!=id;
      })
    })
  }
  return (
    <div className='top'>
      <Navbar />
      <NoteMaker />
      <div className='container'>
        {console.log(item)}
        {item.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              note={val.note}
              noteDelete={noteDelete}
            ></Notes>
          );
        })}
      </div>
    </div>
  );
}

export default App
