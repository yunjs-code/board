import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleContainer.css';

const announcements = [
  { id: 1, text: '공지사항 1: 중요한 업데이트가 있습니다.' },
  { id: 2, text: '공지사항 2: 시스템 점검 안내.' },
  { id: 3, text: '공지사항 3: 신규 기능 추가 안내.' },
];

const MiddleContainer = () => {
  return (
    <div className="middle-container">
      <div className="announcement-slider">
        {announcements.map((announcement, index) => (
          <Link
            key={index}
            to={`/announcement/${announcement.id}`}
            className="announcement"
          >
            {announcement.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MiddleContainer;
