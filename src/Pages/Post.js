import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentList from '../components/Comments/CommentList';
import Like from '../components/Like';
import serverURL, { deleteData, getData, postData } from '../server';
import useToken from './Login/useToken';
import './Post.css';

export default function PostPage() {
  let { id } = useParams();
  const commentInput = useRef();
  const { token } = useToken();

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

  function deletePost() {
    deleteData(`${serverURL}/api/cocktail/${id}`, token.user.token, {
      user: token.user,
    });
    window.location.href = '/';
  }

  function addComment() {
    const comment = postData(`${serverURL}/api/comment`, token.user.token, {
      id: id,
      body: commentInput.current.value,
      user: token.user,
    });
    window.location.reload();
  }

  useEffect(() => {
    async function getCocktails() {
      const cocktail = await getData(`${serverURL}/api/cocktail/${id}`);

      setPost(cocktail);
    }

    getCocktails();
  }, [id]);

  return (
    <div>
      <section className='hero' style={{ color: 'black' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='cardbox shadow-lg bg-white'>
                <div className='cardbox-heading'>
                  <div className='media m-0'>
                    <div className='d-flex mr-3'>
                      <img
                        className='img-fluid rounded-circle'
                        src={post.image}
                        alt='User'
                      />
                    </div>
                    <div className='media-body d-flex justify-content-between'>
                      <div style={{ flex: '1' }}>
                        <p className='m-0'>{post.author}</p>
                        <h1 className='m-0'>{post.title}</h1>

                        <small>
                          <span>
                            <i className='icon ion-md-time' />{' '}
                            {new Date(post.createdAt).toLocaleString()}
                          </span>
                        </small>
                      </div>

                      {token.user._id === post.authorRef ||
                      token.user.role === 'Admin' ? (
                        <div className='d-flex'>
                          <div>
                            <button
                              className='btn btn-danger'
                              onClick={deletePost}
                              style={{ padding: '0.5rem' }}
                            >
                              delete
                            </button>
                          </div>
                          <div>
                            <Link
                              className='nav-link btn btn-info'
                              to={`/editpost/${id}`}
                              type='button'
                              style={{ color: 'black', padding: '0.5rem' }}
                            >
                              Edit
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  {/*/ media */}
                </div>
                {/*/ cardbox-heading */}
                <div className='cardbox-item'>
                  <img className='img-fluid' src={post.image} alt='cocktail' />
                </div>
                {/*/ cardbox-item */}
                <div className='cardbox-item p-4'>{post.body}</div>
                {/*/ cardbox-item */}
                <div className='cardbox-item p-4'>
                  <h2>Ingredients</h2>
                  <ul>
                    {post.ingredients.map((ingredient, i) => (
                      <li key={i}> {ingredient}</li>
                    ))}
                  </ul>
                </div>
                {/*/ cardbox-item */}
                <div className='cardbox-item p-4'>
                  <h2>Steps</h2>
                  <ol>
                    {post.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
                {/*/ cardbox-item */}
                <div className='cardbox-base pl-4 pr-4 d-flex justify-content-around'>
                  <div>
                    <FontAwesomeIcon icon={faComments} color='#43A58D' />
                    <em className='mr-5'>{post.comments?.length}</em>
                  </div>
                  <Like likes={post.likes} id={id} itemType='cocktail' />
                </div>
                {/*/ cardbox-base */}
                <div className='cardbox-comments'>
                  <div className='search'>
                    <input
                      placeholder='Write a comment'
                      ref={commentInput}
                      type='text'
                    />
                    <button onClick={addComment}>
                      <i className='fas fa-comments'></i>
                    </button>
                  </div>
                  {/*/. Search */}
                </div>
                {/*/ cardbox-like */}

                <CommentList comments={post.comments} />
              </div>
              {/*/ cardbox */}
            </div>
            {/*/ col-lg-6 */}
          </div>
          {/*/ row */}
        </div>
        {/*/ container */}
      </section>
    </div>
  );
}
