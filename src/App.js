import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="movies/:id" element={<Movie/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
