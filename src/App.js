import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div >
      <NavBar />
      <ItemListContainer 
      greetings= "Tenemos éste producto pensado para vos !"
      />
    </div>
  );
}

export default App;
