import React from 'react';

export default function Ingredients({ ingredientsList, setIngredientsList }) {
  // handle input change
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = ingredientsList.map((ingredient, i) =>
      i === index ? value : ingredient,
    );
    setIngredientsList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    setIngredientsList(ingredientsList.filter((ingredient, i) => i !== index));
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setIngredientsList([...ingredientsList, '']);
  };

  return (
    <div className='form-group'>
      <label htmlFor='Ingredient'>Tell the world about your Ingredients</label>

      {ingredientsList.map((ingredient, i) => {
        return (
          <div className='box' key={i}>
            <input
              className='form-control'
              placeholder={`Enter Ingredient ${i + 1}`}
              onChange={(e) => handleInputChange(e, i)}
            />

            <div className='btn-box'>
              {ingredientsList.length !== 1 && (
                <button className='mr10' onClick={() => handleRemoveClick(i)}>
                  Remove
                </button>
              )}
              {ingredientsList.length - 1 === i && (
                <button onClick={handleAddClick}>Add</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
