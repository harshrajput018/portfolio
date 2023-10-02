import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import About from './components/About';

import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
