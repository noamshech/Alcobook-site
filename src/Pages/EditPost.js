import React, { useEffect, useState } from 'react';
import Intro from '../components/Upload/Intro';
import FileUpload from '../components/Upload/Picture';
import Ingredients from '../components/Upload/Ingredients';
import Steps from '../components/Upload/Steps';
import serverURL, { getData, patchData, postData } from '../server';
import useToken from './Login/useToken';
import { Redirect, useParams } from 'react-router';

function EditPost() {
  let { id } = useParams();
  const [submited,setSubmited]= useState(false);
  const [post, setPost] = React.useState({
    title: '',
    image: '',
    body: '',
    ingredients: [],
    steps: [],
    author: '',
    createdAt: '',
    likes: [],
    comments: [],
    authorRef: '',
  });

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });
  const [ingredientsList, setIngredientsList] = useState(post.ingredients);
  const [stepsList, setStepsList] = useState(post.steps);
  const [intro, setIntro] = React.useState(post.body);
  const [picSrc, setPicSrc] = useState(post.image);
  const [cocktailName, setCocktailName] = React.useState(post.title);
  const { token } = useToken();

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    await patchData(`${serverURL}/api/cocktail/${id}`, token.user.token, {
      change: {
        title: cocktailName,
        body: intro,
        image: picSrc,
        ingredients: ingredientsList,
        steps: stepsList,
      },
      user: token.user,
    });
    setSubmited(true)
  
      
    //window.location.href = `/post/:${id}`;

  };

  useEffect(() => {
    async function getCocktails() {
      const cocktail = await getData(`${serverURL}/api/cocktail/${id}`);
      console.log(cocktail);
      setPost(cocktail);
      setCocktailName(cocktail.title);
      setIngredientsList(cocktail.ingredients);
      setStepsList(cocktail.steps);
      setIntro(cocktail.body);
      setPicSrc(cocktail.image);
      setCocktailName(cocktail.title);
    }
    getCocktails();
    setCocktailName(post.title);
    setIngredientsList(post.ingredients);
    setStepsList(post.steps);
    setIntro(post.body);
    setPicSrc(post.image);
    setCocktailName(post.title);
  }, [id]);
  if(submited)
  return(<Redirect to= {  `/post/${id}` }/>)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>cocktail name</p>
          <input
            defaultValue={cocktailName}
            type='text'
            onChange={(e) => setCocktailName(e.target.value)}
          />
        </label>

        {
          <FileUpload
            setPicSrc={setPicSrc}
            picSrc={picSrc}
            accept='.jpg,.png,.jpeg'
            label='Add a picture of your Cocktail!'
            multiple
            updateFilesCb={updateUploadedFiles}
          />
        }

        <Intro setIntro={setIntro} intro={post.body} />
        <Ingredients
          ingredientsList={ingredientsList}
          setIngredientsList={setIngredientsList}
        />
        <Steps stepsList={stepsList} setStepsList={setStepsList} />

        <button type='submit'>save changes</button>
        <button type='submit' onClick={() => { return(<Redirect to= {  `/post/${id}` }/>)}}>discard changes</button>
      </form>
    </div>
  );
}


export default EditPost;