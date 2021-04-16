
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import serverURL, { postData } from "../server";
import useToken from "../Pages/Login/useToken";

function Like({ likes, id, itemType }) {
  const { token } = useToken();
  let isLiked = likes.includes(token.user._id);
  const [liked, setLiked] = useState(isLiked);
  console.log(itemType, likes, liked);

  return (
    <div
      onClick={async () => {
        const response = await postData(`${serverURL}/api/${itemType}/${id}`, token.user.token, token);
        if (!liked) {
          likes.push(token.user._id);
        } 
        else {
          likes.splice(likes.indexOf(token.user._id), 1);
        }
        setLiked(state => !state);
      }}
    >
      {liked ? (
        <FontAwesomeIcon icon={faHeart} color="#43A58D" style={{cursor:'pointer'}}/>
      ) : (
        <FontAwesomeIcon icon={farHeart} color="#43A58D" style={{cursor:'pointer'}}  />
      )}    {likes.length}
    </div>
  );
}

export default Like;