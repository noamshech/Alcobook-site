import React, { useEffect, useState } from 'react';
import PostList from '../components/ListPosts';

import Search from '../components/Search';
import serverURL, { getData } from '../server';

function Main() {
  const [posts, setPosts] = React.useState([])

  useEffect(() => {
    async function getCocktails() {
      const cocktails = await getData(`${serverURL}/api/cocktail`);

      setPosts(cocktails);
    }

    getCocktails()
  }, [])
  
  return (
    <div className="row justify-content-center">
      
      
      <Search setPosts={setPosts} />
      <PostList posts={posts} />


    </div>
  )
}

export default Main;
