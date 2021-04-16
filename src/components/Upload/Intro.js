
import React ,{ Component } from "react";
import ReactDOM from 'react-dom';

export default function Intro({setIntro}) {

  return (
    <div className="form-group">
      <label htmlFor="exampleTextarea">Tell the world about your cocktail</label>
      <textarea className="form-control" id="exampleTextarea" rows={3}   onChange={e => setIntro(e.target.value)}/>
    </div>
  );
}
