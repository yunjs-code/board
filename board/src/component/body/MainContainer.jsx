import React, { useState } from 'react';
import BottomContainer from './BottomContainer';
import MiddleContainer from './MiddleContainer';
import './MainContainer.css';

const MainContainer = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="main-container">
      <div className="content-container">
        {children}
        <div className="search-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <BottomContainer searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default MainContainer;
