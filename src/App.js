import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './layout/Index';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Index/>}>
              <Route path='/' element={<Home/>}/>                                                                               
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
