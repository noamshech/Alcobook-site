import React, { useEffect } from "react";
import PostSummery from "./PostSummery";
import serverURL, { getData } from '../server';


export default function PostList() {
  const [posts, setPosts] = React.useState([])

  useEffect(() => {
    async function getCocktails() {
      const cocktails = await getData(`${serverURL}/api/cocktail`);

      setPosts(cocktails);
    }

    getCocktails()
  }, [])

  return (

    <div>

      <div className="container">

        <div className="row" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {posts.map((item, i) => (
            <PostSummery key={i}
              id={item._id}
              title={item.title}
              image={item.image}
              body={item.body}
              ingredients={item.ingredients}
              steps={item.steps}
              author={item.author}
              createdAt={item.createdAt}
              likes={item.likes}
              comments={item.comments}
            />
          ))}

        </div>

      </div>

    </div>

  );
}
