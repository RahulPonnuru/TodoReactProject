import { useContext, useState } from "react";
import ItemContext from "../context/itemContext";

const Button=(props)=>{
    const { selectedItem, setSelectedItem } =useContext(ItemContext);
    const [style, setStyle] = useState(false);
    const modifyType=()=>{
        // console.log(!style)
        if(!style){
            setSelectedItem(prev=>{
                return [
                    ...prev,
                    props.value,
                ]
            })
        }else{
            setSelectedItem(prev=>{
                return prev.filter((type)=>{
                    return type!=props.value
                })
            })
        }
        // console.log("fs"+selectedItem);
    }
    return (
      <button
        onClick={() => {
          setStyle((prev)=>{
            return !prev;
          });
          modifyType();
        }}
        style={{ borderBottom: style && "4px solid gold" }}
      >
        {props.value}
      </button>
    );
}

export default Button;