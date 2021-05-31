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
        <Route path={`${path}/player/:uuid`}>
          <Player />
        </Route>
        <Route path={`${path}/player`}>
          <h1>
            no uuid{" "}
            <Link to="player/3dd5724c1bf54749b6332c04f3962b2e">CID 1</Link>
            <Link to="player/b24ec2cb47b74337a3713be527ac71ec">CID 2</Link>
            <Link to="player/3709f893520544b6996bd583e1966716">CID 3</Link>
            <Link to="player/288d1400-d929-4034-a98c-28e9b9d72e55">CID 4</Link>
          </h1>
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
