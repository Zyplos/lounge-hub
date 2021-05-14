/** @jsxImportSource @theme-ui/core */
import { Button, Grid, Heading, Text } from "@theme-ui/components";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useLocation,
} from "react-router-dom";
import MainLayout from "../internals/MainLayout";
import MCHome from "./mc";
import Player from "./mc/Player";

function MCRouter() {
  let { path } = useRouteMatch();
  let { pathname } = useLocation();
  return (
    <MainLayout noPadding>
      <Switch>
        <Route exact path={path}>
          <MCHome />
        </Route>
        <Route path={[`${path}/player/:uuid`, `${path}/player`]}>
          <Player />
        </Route>
        <Route path={`${path}/chunk`}>
          <h1>chunk page</h1>
        </Route>
        <Route path={`${path}/map`}>
          <h1>map page</h1>
        </Route>

        <Route path="*">
          <Grid>
            <Heading>404</Heading>
            <Text>
              <b>{pathname}</b> does not exist.
            </Text>
            <Link to="/mc">
              <Button>MC Home</Button>
            </Link>
          </Grid>
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default MCRouter;
