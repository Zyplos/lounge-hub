/** @jsx jsx **/
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@theme-ui/core";
import { Text, Button, Spinner, Heading } from "@theme-ui/components";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import useSWR from "swr";

import AuthContext from "./internals/AuthContext";
import MinecraftContext from "./internals/MinecraftContext";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

import FullScreenBox from "./components/FullScreenBox";
import DiscordIcon from "./components/DiscordIcon";
import authFetcher from "./internals/authFetcher";
import WikiPage from "./pages/WikiPage";
import CraftingRecipes from "./pages/wiki/CraftingRecipes";
import Servers from "./pages/wiki/Servers";
import Gameplay from "./pages/wiki/Gameplay";
import Mobs from "./pages/wiki/Mobs";
import TheAether from "./pages/wiki/TheAether";
import TheDeepDark from "./pages/wiki/TheDeepDark";

function App() {
  const { data: userData, userError } = useSWR(
    `${process.env.REACT_APP_AUTHBASE_ROOT}/profile`,
    authFetcher
  );

  const {
    data: minecraftVanillaData,
    minecraftVanillaError,
  } = useSWR(
    `${process.env.REACT_APP_AUTHBASE_ROOT}/minecraft/status/vanilla`,
    authFetcher,
    { refreshInterval: 15000 }
  );

  const {
    data: minecraftModdedData,
    minecraftModdedError,
  } = useSWR(
    `${process.env.REACT_APP_AUTHBASE_ROOT}/minecraft/status/modded`,
    authFetcher,
    { refreshInterval: 15000 }
  );
  // if (error)
  //   return (
  //     <FullScreenBox>
  //       <Text variant="fullbox">Authspace Offline</Text>
  //       <Text>This application is unavailable until further notice.</Text>
  //     </FullScreenBox>
  //   );
  // if (!userData)
  //   return (
  //     <FullScreenBox>
  //       <Spinner title="Connecting to Authspace..." size={200} />
  //     </FullScreenBox>
  //   );
  // if (userData.error && !userData.authenticated)
  //   return (
  //     <FullScreenBox useDims={true}>
  //       {/* <MindspaceId sx={{ width: "180px", mb: 4 }} /> */}
  //       <a
  //         href={`${process.env.REACT_APP_AUTHBASE_ROOT}/auth/discord/`}
  //         sx={{ textDecoration: "none" }}
  //       >
  //         <Button
  //           variant="discord"
  //           sx={{
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <DiscordIcon sx={{ fill: "white", width: "64px", mr: 3 }} />
  //           <Heading as="h3">Login with Discord</Heading>
  //         </Button>
  //       </a>
  //     </FullScreenBox>
  //   );
  return (
    <AuthContext.Provider value={userData}>
      <MinecraftContext.Provider
        value={{ vanilla: minecraftVanillaData, modded: minecraftModdedData }}
      >
        <BrowserRouter>
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
        </BrowserRouter>
      </MinecraftContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
