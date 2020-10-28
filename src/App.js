/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Text, Button, Spinner, Heading } from "@theme-ui/components";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import useSWR from "swr";

import AuthContext from "./internals/AuthContext";
import usePageTracking from "./internals/usePageTracking";
import MinecraftContext from "./internals/MinecraftContext";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

import FullScreenBox from "./components/FullScreenBox";
import DiscordIcon from "./components/DiscordIcon";
import WikiPage from "./pages/WikiPage";
import CraftingRecipes from "./pages/wiki/CraftingRecipes";
import Servers from "./pages/wiki/Servers";
import Gameplay from "./pages/wiki/Gameplay";
import Mobs from "./pages/wiki/Mobs";
import TheAether from "./pages/wiki/TheAether";
import TheDeepDark from "./pages/wiki/TheDeepDark";

function App() {
  const { data: minecraftData, minecraftError } = useSWR(
    `/api/minecraft/status`,
    {
      refreshInterval: 30000,
    }
  );
  usePageTracking();
  return (
    <BrowserRouter>
      <MinecraftContext.Provider value={minecraftError || minecraftData}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/wiki/servers">
            <Servers />
          </Route>
          <Route path="/wiki/crafting-recipes">
            <CraftingRecipes />
          </Route>
          <Route path="/wiki/gameplay">
            <Gameplay />
          </Route>
          <Route path="/wiki/mobs">
            <Mobs />
          </Route>
          <Route path="/wiki/the-aether">
            <TheAether />
          </Route>
          <Route path="/wiki/the-deep-dark">
            <TheDeepDark />
          </Route>
          <Route path="/wiki">
            <WikiPage />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MinecraftContext.Provider>
    </BrowserRouter>
  );
}

export default App;
