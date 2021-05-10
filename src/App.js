import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MinecraftContext from "./internals/MinecraftContext";
import useSWR from "swr";
import Wiki from "./pages/WikiRouter";

function App() {
  const { data: minecraftData, minecraftError } = useSWR(
    `/api/minecraft/status`,
    {
      refreshInterval: 60000,
    }
  );
  return (
    <div>
      <MinecraftContext.Provider value={minecraftError || minecraftData}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wiki">
            <Wiki />
          </Route>

          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </MinecraftContext.Provider>
    </div>
  );
}

export default App;
