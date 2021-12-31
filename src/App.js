import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div>
      <Routes>
        <Route path="">
          <AllMeetups />
        </Route>
        <Route path="new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
