import './App.scss';
import Button from "./components/Buttons/Button.jsx";
import CardTile from "./components/CardTile/CardTile.jsx";
import Counter from "./components/Counter/Counter.jsx";
import team from './data/team.js';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import {useState} from "react";
import ExploreUser from './container/ExploreUser/ExploreUser';

function App() {

  return (
    <div className="App">
      <h1 className="title">Ticket Tracker</h1>
      <ExploreUser users={team} />
    </div>
  );
}

export default App;
