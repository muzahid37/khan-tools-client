import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home';
import Navbar from './Page/Sheared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Page/Blogs/Blogs';
import MyPortfolio from './Page/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
