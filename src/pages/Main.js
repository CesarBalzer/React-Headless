import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css';
function Main() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/wp-json/wp/v2/posts');
      setPosts(response.data);
    }
    loadPosts();
  }, []);

  return (
    <>
      <ul className="menu_list">
        <li>
          <Link className="link" to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link className="link" to='/product'>Products</Link>
        </li>
      </ul>
      <h1>Main</h1>
      <h2>Posts</h2>
      {posts.map(post => (
        <div>
          <h3 key={post.id}>{post.title.rendered}</h3>
          {post.content.rendered}
        </div>
      ))}
    </>
  );

}

export default Main;
