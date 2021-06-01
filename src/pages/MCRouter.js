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
import IndexPlayer from "./mc/IndexPlayer";
import Player from "./mc/Player";
import VisitorsLog from "./mc/VisitorsLog";

function MCRouter() {
  let { path } = useRouteMatch();
  let { pathname } = useLocation();
  return (
    <MainLayout noPadding>
      <Switch>
        <Route exact path={path}>
          <MCHome />
        </Route>
        <Route path={`${path}/player/:name`}>
          <Player />
        </Route>
        <Route path={`${path}/player`}>
          <IndexPlayer />
        </Route>
        <Route path={`${path}/chunk/:uuid/:x/:z`}>
          <VisitorsLog />
        </Route>
        <Route path={`${path}/chunk`}>
          <h1>
            chunk page home{" "}
            <Link to="chunk/7b1803e0-1cfa-443d-9948-ebaebd2b73e7/-1/21">
              TEST
            </Link>
          </h1>
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
