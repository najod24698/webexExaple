import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cisco from './components/Cisco';


function App() {      
  return (
    <Router>
      <div className="app">
           <Header />
          <Cisco />
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
