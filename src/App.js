import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './home/Home';
import Tips from './tips/Tips';
import Reads from './reads/Reads';
import Toys from './toys/Toys';
import Stores from './stores/Stores';
import BookListInfant2 from './booklist/BookListInfant2';
import BookList35 from './booklist/BookList35';
import BookList68 from './booklist/BookList68';
import BookList912 from './booklist/BookList912';
import BookList13up from './booklist/BookList13up';

const App = () => {
  return (
    <Switch>        
      <>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/tips" component={Tips}/>
        <Route exact path="/reads" component={Reads}/>
        <Route exact path="/toys" component={Toys}/>
        <Route exact path="/stores" component={Stores}/>
        <Route exact path="/booklistinfant2" component={BookListInfant2}/>
        <Route exact path="/booklist35" component={BookList35}/>
        <Route exact path="/booklist68" component={BookList68}/>
        <Route exact path="/booklist912" component={BookList912}/>
        <Route exact path="/booklist13up" component={BookList13up}/>
      </>
    </Switch>
  );
}

export default App;