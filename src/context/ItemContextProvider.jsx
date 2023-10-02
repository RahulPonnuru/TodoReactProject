import { useState } from "react"
import ItemContext from "./itemContext"

const ItemContextProvider=({children})=>{
    const [item,setItem]=useState([]);
    return(
        <ItemContext.Provider value={{item,setItem}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider;