import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from '../components/topbar/topbar'
import Video from '../components/topbar/middlenavbar/video/video';
import Home from '../components/home/home';
import Marketplace from '../components/topbar/middlenavbar/marketplace/marketplace'
import Group from '../components/topbar/middlenavbar/group/group'
import Gaming from '../components/topbar/middlenavbar/gaming/gaming'
import Live from '../components/topbar/middlenavbar/video/live/live';
import Reels from '../components/topbar/middlenavbar/video/reels/reels';
import Explore from '../components/topbar/middlenavbar/video/explore/explore';
import Savedvideo from '../components/topbar/middlenavbar/video/savedvideo/savedvideo';
import Shows from '../components/topbar/middlenavbar/video/shows/shows';
import Videohome from '../components/topbar/middlenavbar/video/videohome/videohome';
import Browseall from '../components/topbar/middlenavbar/marketplace/browseall/browseall';
import Notification from '../components/topbar/middlenavbar/marketplace/notification/notification';
import Inbox from '../components/topbar/middlenavbar/marketplace/inbox/inbox';
import Buying from '../components/topbar/middlenavbar/marketplace/buying/buying';
import Selling from '../components/topbar/middlenavbar/marketplace/selling/selling';
import NewmessageBtn from '../components/newmessageBtn/newmessageBtn';
import Yourfeed from '../components/topbar/middlenavbar/group/yourfeed/yourfeed';
import Discover from '../components/topbar/middlenavbar/group/discover/discover';
import Yourgroups from '../components/topbar/middlenavbar/group/yourgroups/yourgroups';
import Playgames from '../components/topbar/middlenavbar/gaming/playgames/playgames';
import Gamingnotification from '../components/topbar/middlenavbar/gaming/gamingnotification/gamingnotification';
const AppRoutes = ({handleLogout}) => {
  return (
    <div className="routesWrapper">
    <Router>
      <Topbar handleLogout={handleLogout} />
      <Routes>
          <Route path="/Facebook" element={<Home />} />
          <Route path="/video" element={<Video />}>
            <Route path="" element={<Videohome />} />
            <Route path="live" element={<Live />} />
            <Route path="reels" element={<Reels />} />
            <Route path="explore" element={<Explore />} />
            <Route path="savedvideo" element={<Savedvideo />} />
            <Route path="shows" element={<Shows />} />
          </Route>
          <Route path="/marketplace" element={<Marketplace />}>
            <Route path='' element={<Browseall/>}></Route>
            <Route path='notification' element={<Notification/>}></Route>
            <Route path='inbox' element={<Inbox/>}></Route>
            <Route path='buying' element={<Buying/>}></Route>
            <Route path='selling' element={<Selling/>}></Route>
          </Route>
          <Route path="/group" element={<Group />}>
            <Route path='' element={<Yourfeed/>}></Route>
            <Route path='discover' element={<Discover/>}></Route>
            <Route path='yourgroups' element={<Yourgroups/>}></Route>
          </Route>
          <Route path="/gaming" element={<Gaming />}>
            <Route path='' element={<Playgames/>}></Route>
            <Route path='notifications' element={<Gamingnotification/>}></Route>
          </Route>
        </Routes>
    </Router>
    <NewmessageBtn/>
    </div>
  );
};

export default AppRoutes;
