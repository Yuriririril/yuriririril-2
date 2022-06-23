import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/works" exact>
            <Header/>
            works
          </Route>
          <Route path="/bio" exact>
            <Header/>
            bio
          </Route>
          <Route path="/contacts" exact>
            <Header/>
            contacts
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
