import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Test = () => {
  return (
    <div className="App-header">
      <Link to="/" className="App-link">
        go home
      </Link>
    </div>
  );
};

export default Test;
