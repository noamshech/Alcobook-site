import React from 'react';
import PostList from '../components/ListPosts';

import Search from '../components/Search';

function Main() {
  return (
    <div className="row justify-content-center">
      <Search />
      <PostList/>
      

    </div>
  )
}

export default Main;
