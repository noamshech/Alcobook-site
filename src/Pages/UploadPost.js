import React, { useState } from 'react';
import Intro from '../components/Upload/Intro';
import FileUpload from '../components/Upload/Picture';
import Ingredients from '../components/Upload/Ingredients';
import Steps from '../components/Upload/Steps';
import serverURL, { postData } from '../server';
import useToken from './Login/useToken';

function UpLoadPost() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });
  const [ingredientsList, setIngredientsList] = useState(['']);
  const [stepsList, setStepsList] = useState(['']);
  const [intro, setIntro] = React.useState();
  const [picSrc, setPicSrc] = React.useState();
  const [cocktailName, setCocktailName] = React.useState();
  const { token } = useToken();

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    await postData(`${serverURL}/api/cocktail`, token.user.token, {
      title: cocktailName,
      body: intro,
      image: picSrc,
      ingredients: ingredientsList,
      steps: stepsList,
      user: token.user,
    });

    window.location.href = '/';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>cocktail name</p>
          <input
            type='text'
            onChange={(e) => setCocktailName(e.target.value)}
          />
        </label>

        {
          <FileUpload
            setPicSrc={setPicSrc}
            accept='.jpg,.png,.jpeg'
            label='Add a picture of your Cocktail!'
            multiple
            updateFilesCb={updateUploadedFiles}
          />
        }

        <Intro setIntro={setIntro} />
        <Ingredients
          ingredientsList={ingredientsList}
          setIngredientsList={setIngredientsList}
        />
        <Steps stepsList={stepsList} setStepsList={setStepsList} />

        <button type='submit'>Create New User</button>
      </form>
    </div>
  );
}

export default UpLoadPost;
