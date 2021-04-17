import React from 'react';

export default function FileUpload({ setPicSrc, picSrc = "" }) {
  return (
    <div className='form-group'>
      <label htmlFor='exampleTextarea'>
       insert a link to your cocktail picture
      </label>
      <input
        className='form-control'
        id='exampleTextarea'
        rows={3}
        defaultValue={picSrc}
        onChange={(e) => setPicSrc(e.target.value)}
      />
    </div>
  );
}
