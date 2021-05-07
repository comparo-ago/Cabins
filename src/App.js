import './App.css';
import Item from './components/Item/Item';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div >
      <NavBar />
      <ItemListContainer 
      greetings= "Tenemos éste producto pensado para vos !"
      />
      <Item />
      <ItemCount />
    </div>
  );
}

export default App;
