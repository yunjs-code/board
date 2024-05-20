import React from 'react';
import { useParams } from 'react-router-dom';

const announcements = [
  { id: 1, text: '공지사항 1: 중요한 업데이트가 있습니다.', content: '공지사항 1의 상세 내용입니다.' },
  { id: 2, text: '공지사항 2: 시스템 점검 안내.', content: '공지사항 2의 상세 내용입니다.' },
  { id: 3, text: '공지사항 3: 신규 기능 추가 안내.', content: '공지사항 3의 상세 내용입니다.' },
];

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcement = announcements.find((ann) => ann.id === parseInt(id));

  return (
    <div className="announcement-detail">
      <h1>{announcement.text}</h1>
      <p>{announcement.content}</p>
    </div>
  );
};

export default AnnouncementDetail;
