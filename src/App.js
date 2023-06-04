import './App.scss';
import Home from './pages/home';
import Nav from './components/nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/" 
            element={<Home />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
