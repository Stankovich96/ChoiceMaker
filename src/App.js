import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import ChoiceMaker from "./component/choiceMaker";
import DisplayAnswer from "./component/displayAnswer";
import NoMatch from "./component/noMatch";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact strict >
      <ChoiceMaker/>
        </Route>
        <Route path="/answer" exact strict >
          <DisplayAnswer />
        </Route>
        <Route path="/*">
          <NoMatch/>
        </Route>
      </Switch>

    </Router>
  ) 
}

export default App;
