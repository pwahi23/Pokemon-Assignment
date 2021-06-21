import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Pokemon } from './components/Pokemon/Pokemon';

function App() {
  return (
    <div className="container">
      <Header />
      <Pokemon />
      <Footer />
    </div>
  );
}

export default App;
