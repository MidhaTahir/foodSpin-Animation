import { Switch, Route } from "react-router-dom";
import { defaultRoutes } from "./routes";

function App() {
  return (
    <div>
      <Switch>
        {defaultRoutes.map((route) => {
          return (
            <Route
              exact
              key={route.name}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
