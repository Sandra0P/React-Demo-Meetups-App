import { Route, Switch } from "react-router-dom"; //use switch to tell react to use route of only one path
import AllMeetupsPage from "./components/pages/AllMeetups";
import FavoritesPage from "./components/pages/Favorites";
import NewMeetupPage from "./components/pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

//if Route determines that the current URL matches the path then it will run given page component
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact = {true}> 
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//exact prop: tells react to check that the full path matches "/" and not just that the path begins with "/"