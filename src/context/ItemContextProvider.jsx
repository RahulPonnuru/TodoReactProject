import { useState } from "react"
import ItemContext from "./itemContext"

const ItemContextProvider=({children})=>{
    const [item,setItem]=useState([]);
    const [selectedItem, setSelectedItem]=useState([]);
    const [state,changeState]=useState(false);
    return(
        <ItemContext.Provider value={{item,setItem,selectedItem,setSelectedItem,state,changeState}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider;