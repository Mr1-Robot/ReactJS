import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";

import Meetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MeetupPage from "./pages/MeetupPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Meetups />} />
          <Route path="meetups/:meetupId" element={<MeetupPage />} />
          <Route path="new-meetup" element={<NewMeetup />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
