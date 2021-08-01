import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddCar from './components/AddCar'
import Record from './components/Record'
import Store from './components/Store'


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path='/' component={Store} />
      <Route exact path='/addcar' component={AddCar} />
      <Route exact path='/record' component={Record} />
      </Switch>
      </div>
      </Router>
  );
}

export default App;
