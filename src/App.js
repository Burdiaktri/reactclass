import './App.css';
import { NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <route path="/category/:categoryId"><ItemListContainer nombre="Número 1"/></route>
        <route path="/item/:itemId"><ItemDetailContainer /></route>
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
