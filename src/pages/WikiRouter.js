/** @jsxImportSource @theme-ui/core */
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainLayout from "../internals/MainLayout";
import WikiHome from "./Wiki";
import Changelog from "./Wiki/Changelog";
/*
<Route exact path="/wiki/crafting-recipes">
  <h1>wiki crafting</h1>
</Route>
<Route exact path="/wiki/gameplay">
  <h1>wiki gamneplay</h1>
</Route>
<Route exact path="/wiki/mobs">
  <h1>wiki mobs</h1>
</Route>
<Route exact path="/wiki/the-aether">
  <h1>wiki aether</h1>
</Route>
<Route exact path="/wiki/the-deep-dark">
  <h1>wiki deep dark</h1>
</Route>
<Route exact path="/wiki">
  <h1>wiki home</h1>
</Route>
*/
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
          <h1>crafting</h1>
        </Route>
        <Route path={`${path}/gameplay`}>
          <h1>gameplay</h1>
        </Route>
        <Route path={`${path}/mobs`}>
          <h1>mobs</h1>
        </Route>
        <Route path={`${path}/the-aether`}>
          <h1>the-aether</h1>
        </Route>
        <Route path={`${path}/the-deeper-dark`}>
          <h1>the-deeper-dark</h1>
        </Route>
        <Route path="*">
          <h1>wiki 404</h1>
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default Wiki;
