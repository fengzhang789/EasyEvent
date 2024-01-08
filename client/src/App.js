import './assets/stylesheets/App.css';
import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(data => setMessage(data.hello))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
