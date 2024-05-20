import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopContainer.css';

const popularPosts = [
  { id: 1, title: '인기 글 제목 1', summary: '인기 글 요약 1', content: '인기 글 내용 1', image: 'https://via.placeholder.com/800x400' },
  { id: 2, title: '인기 글 제목 2', summary: '인기 글 요약 2', content: '인기 글 내용 2', image: 'https://via.placeholder.com/800x400' },
  { id: 3, title: '인기 글 제목 3', summary: '인기 글 요약 3', content: '인기 글 내용 3', image: 'https://via.placeholder.com/800x400' },
  { id: 4, title: '인기 글 제목 4', summary: '인기 글 요약 4', content: '인기 글 내용 4', image: 'https://via.placeholder.com/800x400' },
  { id: 5, title: '인기 글 제목 5', summary: '인기 글 요약 5', content: '인기 글 내용 5', image: 'https://via.placeholder.com/800x400' },
];

const TopContainer = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [hoveredPostIndex, setHoveredPostIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % popularPosts.length);
    }, 3000); // 3초마다 변경
    return () => clearInterval(interval);
  }, []);

  const postToShow = hoveredPostIndex !== null ? popularPosts[hoveredPostIndex] : popularPosts[currentPostIndex];

  return (
    <div className="top-container">
      <div className="top-left">
        <Link to={`/post/${postToShow.id}`}>
          <img src={postToShow.image} alt={postToShow.title} />
          <div className="overlay">
            <h2>{postToShow.title}</h2>
          </div>
        </Link>
      </div>
      <div className="top-right">
        <h3>인기 글 목록</h3>
        <ul>
          {popularPosts.map((post, index) => (
            <li
              key={post.id}
              onMouseEnter={() => setHoveredPostIndex(index)}
              onMouseLeave={() => setHoveredPostIndex(null)}
            >
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopContainer;
