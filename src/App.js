import './App.css';
import { NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer nombre="Número 1"/>
      <ItemDetailContainer />

    </div>
  );
}

export default App;
