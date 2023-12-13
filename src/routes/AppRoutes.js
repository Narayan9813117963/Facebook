import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from '../components/topbar/topbar'
import Video from '../components/topbar/video/video';
import Home from '../components/home/home';
import Marketplace from '../components/topbar/marketplace/marketplace'
import Group from '../components/topbar/group/group'
import Gaming from '../components/topbar/gaming/gaming'

const AppRoutes = () => {
  return (
    <div className="routesWrapper">
    <Router>
      <Topbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/marketplace" element={<Marketplace/>} />
        <Route path="/group" element={<Group/>} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppRoutes;
