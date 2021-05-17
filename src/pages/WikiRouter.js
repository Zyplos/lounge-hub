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
import WikiHome from "./wiki/index";
import Changelog from "./wiki/Changelog";
import CraftingRecipes from "./wiki/CraftingRecipes";
import Gameplay from "./wiki/Gameplay";
import LandClaiming from "./wiki/LandClaiming";
import TheAether from "./wiki/TheAether";

function WikiRouter() {
  let { path } = useRouteMatch();
  let { pathname } = useLocation();
  return (
    <MainLayout>
      <Switch>
        <Route exact path={path}>
          <WikiHome />
        </Route>
        <Route path={`${path}/changelog`}>
          <Changelog />
        </Route>
        <Route path={`${path}/crafting-recipes`}>
          <CraftingRecipes />
        </Route>
        <Route path={`${path}/gameplay`}>
          <Gameplay />
        </Route>
        <Route path={`${path}/the-aether`}>
          <TheAether />
        </Route>
        <Route path={`${path}/land-claiming`}>
          <LandClaiming />
        </Route>
        <Route path="*">
          <Grid>
            <Heading>404</Heading>
            <Text>
              <b>{pathname}</b> does not exist.
            </Text>
            <Link to="/wiki">
              <Button>Wiki Home</Button>
            </Link>
          </Grid>
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default WikiRouter;
