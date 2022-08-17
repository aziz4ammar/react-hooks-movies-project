import './App.css';
import { tab } from './Data';
import List from './components/List';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from "./components/Cat";
function App() {
  const [movie, setMovie] = useState(tab)

  const [text,setText] = useState("")
  return (
    <div className="App">
      <Cat text={text} setText={setText}/>
      <List movie={movie.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())||el.date.includes(text))}  />
    </div>
  );
}

export default App;
