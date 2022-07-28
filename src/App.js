import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
