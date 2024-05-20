import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContainer from './component/body/MainContainer';
import TopContainer from './component/body/TopContainer';
import BottomContainer from './component/body/BottomContainer';
import MiddleContainer from './component/body/MiddleContainer';
import PostDetail from './component/body/PostDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainContainer>
        <TopContainer />
        <MiddleContainer />
        
        <BottomContainer />
      </MainContainer>
      <Routes>
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
    </Router>
    
  );
};

export default App;
