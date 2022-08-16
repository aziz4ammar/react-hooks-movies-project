import './App.css';
import { tab } from './Data';
import List from './components/List';
import { useState } from 'react';
import Dash from './components/Dash';

function App() {
  const [movie, setMovie] = useState(tab)
  return (
    <div className="App">
      <List movie={movie} />
    </div>
  );
}

export default App;
