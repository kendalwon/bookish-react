import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './Home';
import Tips from './Tips';
import Reads from './Reads';
import Toys from './Toys';
import Stores from './Stores';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tips" component={Tips}/>
            <Route exact path="/reads" component={Reads}/>
            <Route exact path="/toys" component={Toys}/>
            <Route exact path="/stores" component={Stores}/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;