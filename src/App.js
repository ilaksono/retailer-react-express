import { Switch, Router, Redirect } from 'react-router-dom';
import routes from 'routes';
import NavBar from 'components/NavBar';
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
    <Redirect from="/" to="/home" />
  </Switch>
);


function App() {

  return (
    <div className="App">
      <NavBar />
      {switchRoutes}
    </div>
  );
}

export default App;
