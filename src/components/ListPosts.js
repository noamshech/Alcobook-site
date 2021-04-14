import React from "react";
import PostSummery from "./PostSummery";


export default function PostList() {
 // const [items, setItems] = React.useSate([])

  //if (items < 1)
  //  return "";

  return (
    <div>
        
    <div className="container">
      <div className="row">
      <PostSummery/>
      <PostSummery/>
      <PostSummery/>
      <PostSummery/>
      </div>
    </div>
  </div>


  )  

}
