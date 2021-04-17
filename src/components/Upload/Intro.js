import React from 'react';

export default function Intro({ setIntro, intro = "" }) {
  return (
    <div className='form-group'>
      <label htmlFor='exampleTextarea'>
        Tell the world about your cocktail
      </label>
      <textarea
        className='form-control'
        id='exampleTextarea'
        rows={3}
        defaultValue={intro}
        onChange={(e) => setIntro(e.target.value)}
      />
    </div>
  );
}
