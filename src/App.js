import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";
import MinecraftContext from "./internals/MinecraftContext";
import useSWR from "swr";

function App() {
  const { data: minecraftData, minecraftError } = useSWR(
    `/api/minecraft/status`,
    {
      refreshInterval: 60000,
    }
  );
  return (
    <BrowserRouter>
      <MinecraftContext.Provider value={minecraftError || minecraftData}>
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route exact path="/wiki/servers">
            <h1>wiki servers</h1>
          </Route>
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

          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </MinecraftContext.Provider>
    </BrowserRouter>
  );
}

export default App;
