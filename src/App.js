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
import BookListInfant2 from './BookListInfant2';
import BookList35 from './BookList35';
import BookList68 from './BookList68';
import BookList912 from './BookList912';
import BookList13up from './BookList13up';

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
            <Route exact path="/booklistinfant2" component={BookListInfant2}/>
            <Route exact path="/booklist35" component={BookList35}/>
            <Route exact path="/booklist68" component={BookList68}/>
            <Route exact path="/booklist912" component={BookList912}/>
            <Route exact path="/booklist13up" component={BookList13up}/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;