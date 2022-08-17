import './App.css';
import { tab } from './Data';
import List from './components/List';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from "./components/Cat";
function App() {
  const [movie, setMovie] = useState(tab)
  return (
    <div className="App">
      <Cat/>
      <List movie={movie} />
    </div>
  );
}

export default App;
