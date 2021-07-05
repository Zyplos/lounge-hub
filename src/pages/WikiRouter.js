/** @jsxImportSource theme-ui */
import { Button, Grid, Heading, Text } from "theme-ui";
import { Switch, Route, useRouteMatch, Link, useLocation } from "react-router-dom";
import MainLayout from "../internals/MainLayout";
import WikiHome from "./wiki-pages/index";
import Changelog from "./wiki-pages/Changelog";
import CraftingRecipes from "./wiki-pages/CraftingRecipes";
import Gameplay from "./wiki-pages/Gameplay";
import LandClaiming from "./wiki-pages/LandClaiming";
import ProximityChat from "./wiki-pages/ProximityChat";
import TheAether from "./wiki-pages/TheAether";

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
        <Route path={`${path}/proximity-chat`}>
          <ProximityChat />
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
