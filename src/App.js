import { Switch, Route, useLocation, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import MinecraftContext from "./internals/MinecraftContext";
import useSWR from "swr";
import WikiRouter from "./pages/WikiRouter";
import MCRouter from "./pages/MCRouter";
import FullBox from "./components/FullBox";
import { Button, Grid, Heading, Text } from "theme-ui";

function App() {
  const { data: minecraftData, minecraftError } = useSWR(
    `/api/minecraft/status`,
    {
      refreshInterval: 60000,
    }
  );
  let { pathname } = useLocation();
  return (
    <div>
      <MinecraftContext.Provider value={minecraftError || minecraftData}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wiki">
            <WikiRouter />
          </Route>
          <Route path="/mc">
            <MCRouter />
          </Route>
          <Route path="/youre-invited">
            <Redirect to="/mc" />
          </Route>

          <Route path="*">
            <FullBox useDims>
              <Grid>
                <Heading>404</Heading>
                <Text>
                  <b>{pathname}</b> does not exist.
                </Text>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </Grid>
            </FullBox>
          </Route>
        </Switch>
      </MinecraftContext.Provider>
    </div>
  );
}

export default App;
