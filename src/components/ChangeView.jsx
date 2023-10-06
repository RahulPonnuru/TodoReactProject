import { useState } from "react";
import Button from "./Button";

const ChangeView=(props)=>{
    return (
        <div className="changeView">
            {props.types.map((type)=>{
                return (
                  <Button
                    value={type}
                  ></Button>
                );
            })}
        </div>
    )
}

export default ChangeView;