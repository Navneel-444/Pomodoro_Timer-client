import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
