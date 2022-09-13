import { Route, Switch } from "react-router-dom"; //use switch to tell react to use route of only one path
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from './components/layout/Layout';
//if Route determines that the current URL matches the path then it will run given page component
function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;

//exact prop: tells react to check that the full path matches "/" and not just that the path begins with "/"