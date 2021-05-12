/** @jsxImportSource @theme-ui/core */
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainLayout from "../internals/MainLayout";
import WikiHome from "./Wiki";
import Changelog from "./Wiki/Changelog";
import CraftingRecipes from "./Wiki/CraftingRecipes";
import Gameplay from "./Wiki/Gameplay";
import LandClaiming from "./Wiki/LandClaiming";
import TheAether from "./Wiki/TheAether";

function Wiki() {
  let { path, url } = useRouteMatch();
  console.log("======", path, url);
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
          <h1>wiki 404</h1>
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default Wiki;
