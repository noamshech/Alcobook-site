
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

function Like({ likes }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="container">
      <center>
        <div
          className="container"
          style={{ border: "1px solid black", width: "15%" }}
          onClick={() => setLiked((state) => !state)}
        >
          {liked === false ? (
            <FontAwesomeIcon icon={faHeart} color="red" />
          ) : (
            <FontAwesomeIcon icon={faHeartBroken} color="pink"/>
          )}{ likes }
        </div>
      </center>
    </div>
  );
}
  
export default Like;