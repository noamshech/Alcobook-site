import React, { useState } from "react";
import Intro from "../components/Upload/Intro";
import FileUpload from "../components/Upload/Picture";
import Ingredients from "../components/Upload/Ingredients";
import Steps from "../components/Upload/Steps";


function UpLoadPost() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Add a picture of your Cocktail!"
          multiple
          updateFilesCb={updateUploadedFiles}
        />

        <br />

        <Intro />
        <br />
        <Ingredients />
        <br />
        <Steps />


        <button type="submit">Create New User</button>
      </form>
    </div>
  );
}

export default UpLoadPost;