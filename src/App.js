import './App.css';
import { NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer nombre="Número 1"/>
    </div>
  );
}

export default App;
