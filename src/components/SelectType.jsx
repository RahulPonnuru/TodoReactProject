import { useState } from "react"

const SelectType = ({ changeSelectedType,types }) => {
  return (
    <div className="selectType">
      <select
        className="dropdown"
        onChange={(event) => {
          changeSelectedType(event.target.value);
        }}
      >
        <option className="selectTypeOption" selected disabled>
          Choose one
        </option>
        <option className="selectTypeOption" value="All">
          All
        </option>
        {types.map((item) => {
          return (
            <option className="selectTypeOption" value={item}>
              {item}
            </option>
          );
        })}
        <option className="selectTypeOption" value="Three types choosen">
          Three types choosen
        </option>
      </select>
    </div>
  );
};

export default SelectType;