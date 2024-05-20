import React from 'react';
import { Link } from 'react-router-dom';
import './BottomContainer.css';

const posts = [
  { id: 1, title: '게시글 1', content: '게시글 내용 1', timestamp: '2023-05-20 14:30', views: 120 },
  { id: 2, title: '게시글 2', content: '게시글 내용 2', timestamp: '2023-05-21 09:20', views: 85 },
  { id: 3, title: '게시글 3', content: '게시글 내용 3', timestamp: '2023-05-22 16:45', views: 150 },
  { id: 4, title: '게시글 4', content: '게시글 내용 4', timestamp: '2023-05-23 11:10', views: 90 },
  { id: 5, title: '게시글 5', content: '게시글 내용 5', timestamp: '2023-05-24 17:00', views: 200 },
  { id: 6, title: '게시글 6', content: '게시글 내용 6', timestamp: '2023-05-25 12:35', views: 130 },
  { id: 7, title: '게시글 7', content: '게시글 내용 7', timestamp: '2023-05-26 14:30', views: 140 },
  { id: 8, title: '게시글 8', content: '게시글 내용 8', timestamp: '2023-05-27 09:20', views: 95 },
  { id: 9, title: '게시글 9', content: '게시글 내용 9', timestamp: '2023-05-28 16:45', views: 160 },
];

const BottomContainer = ({ searchTerm }) => {
  const filteredPosts = posts.filter(post =>
    post.title.includes(searchTerm) || post.content.includes(searchTerm)
  );

  return (
    <div className="bottom-container">
      {filteredPosts.map(post => (
        <div key={post.id} className="bottom-item">
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>{post.content}</p>
          <div className="post-info">
            <span>작성 시간: {post.timestamp}</span>
            <span>조회수: {post.views}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomContainer;
