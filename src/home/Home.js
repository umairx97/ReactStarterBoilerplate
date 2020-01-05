import React from 'react';
import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({}));

const Home = () => {
  // const classes = useStyles();

  return (
    <div id="home">
      <h1>Oh My React</h1>
      <Link to="/crud-operations/basic">Goto Component</Link>
    </div>
  );
};


export default Home;
