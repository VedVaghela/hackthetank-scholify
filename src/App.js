import logo from './logo.svg';
import './App.css';
import { Flow } from './components/Flow';
import { Nav } from './components/Nav';
import { Flow2 } from './components/Flow2';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ListBoard } from './components/ListBoard';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route path='/'
              element={<Home/>}
              />
      <Route path="/userflow"
             element={<Flow2/>}
      />
      <Route path="/list"
              element={<ListBoard/>}
      />
    </Routes>
    
    </Router>
  );
}

export default App;
