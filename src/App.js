import './App.css';
import { tab } from './Data';
import List from './components/List';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from "./components/Cat";
import More from './components/More';
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  const [movie, setMovie] = useState(tab)

  const [text,setText] = useState("")
  const handleEdit=(editedMovie)=>{
    setMovie([...movie.map(el=>el.id==editedMovie.id?editedMovie:el)])
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Cat text={text} setText={setText}/><List movie={movie.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())||el.date.includes(text))} edit={handleEdit}  /> </>} />
      <Route path="/movie/:id" element={<More movie={movie} />} />
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
