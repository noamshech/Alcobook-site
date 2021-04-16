import React, { useState } from "react";

export default function Ingredients() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (

    <div className="form-group">
      <label htmlFor="Ingredient">Tell the world about your Ingredients</label>



      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="Ingredient"
              className="form-control"
              placeholder="Enter Ingredient"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />

            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

    </div>
  );
}


