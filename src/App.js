import './App.css';
import { NavBar} from './components/navbar';
import ItemListContainer from './components/itemslistcontainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer nombre="Número 1"/>
     
    </div>
  );
}

export default App;
