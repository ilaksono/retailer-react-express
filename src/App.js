import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from 'routes';
import NavBar from 'components/NavBar';
import {useState} from 'react';
import 'styles/index.scss';
const switchRoutes = (
  routes.map((prop, key) => {
    return (
      <Route
        path={prop.path}
        component={prop.component}
        key={key}
      />
    );
  })
);


function App() {
  const [item, setItem] = useState()

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          {switchRoutes}
          < Redirect from="/" to="/home" />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
