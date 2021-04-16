import React, { useState } from "react";
import serverURL, { postData } from "../server";


export default function Search({setPosts}) {
  const [showSearchFields, setShowSearchFields] = useState(false);

  const [cocktail, setCocktails] = useState("");
  const [author, setSuthor] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [body, setbody] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const search = {};
    if (cocktail !== "")
      search.title = cocktail;
    if (author !== "")
      search.author = author;
    if (ingredient !== "")
      search.ingredient = ingredient;
    if (body !== "")
      search.body = body;
    const searchResult = await postData(`${serverURL}/api/cocktail/search`, null, { search });
    console.log(searchResult);
    setPosts(searchResult);
  }

  return (
    <div className="container col-md-8 mb-5 col-md-offset-6 d-flex align-items-start">
      <form className="input-group" id="adv-search" style={{ flex: "1" }} onSubmit={handleSubmit}>
        <div id="myDIV" style={{ margin: "0.375rem", width: "80%" }}>
          <input type="text" onChange={e => setCocktails(e.target.value)} className="form-control" placeholder="Search for Cocktails" style={{ marginBottom: "0.375rem" }} />

          {showSearchFields && <input onChange={e => setSuthor(e.target.value)} type="text" className="form-control" placeholder="author" style={{ marginBottom: "0.375rem" }} />}
          {showSearchFields && <input onChange={e => setIngredient(e.target.value)} type="text" className="form-control" placeholder="ingredient" style={{ marginBottom: "0.375rem" }} />}
          {showSearchFields && <input onChange={e => setbody(e.target.value)} type="text" className="form-control" placeholder="free text" style={{ marginBottom: "0.375rem" }} />}


        </div>

        <button type="submit" className="btn btn-primary" >< i className="fa fa-search" aria-hidden="true" /> </button>

      </form>

      <button className="btn btn-primary" onClick={() => setShowSearchFields((state) => !state)} >Advanced search </button>
    </div>
  )
}
