import React  from "react";

export default function Steps({stepsList, setStepsList}) {
  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = stepsList.map((step, i) => i === index ?   value  : step);
    setStepsList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    setStepsList(stepsList.filter((step, i) => i !== index));
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setStepsList([...stepsList,  "" ]);
  };

  return (

    <div className="form-group">
      <label htmlFor="Step">Tell the world what are the steps in order to achive the amazing Taste!</label>



      {stepsList.map((step, i) => {
        return (
          <div className="box" key={i}>
            <input
              className="form-control"
              placeholder={`Enter Step ${i + 1}`}
              onChange={e => handleInputChange(e, i)
              }
            />

            <div className="btn-box">
              {stepsList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {stepsList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

    </div>
  );
}


