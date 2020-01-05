import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div id="home">
      <h1>Oh My React</h1>
      <Link to="/crud-operations/basic">Goto Component</Link>
    </div>
  );
};


export default Home;
