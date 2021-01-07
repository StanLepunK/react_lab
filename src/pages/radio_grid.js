import '../App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const grid_style = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
};

const cell_style = (over_is) => {
  let cursor_is = `auto`;
  if (cursor_is) cursor_is = `pointer`;

  return {
    width: `100%`,
    height: `100%`,
    border: `0`,
    padding: `0`,
    cursor: cursor_is,
  };
};

function Cell({ children }) {
  // over
  const [over_is, set_over_is] = useState(false);
  useEffect(() => {
    set_over_is(over_is);
  }, [over_is]);
  const mouse_state = () => {
    over_is ? set_over_is(false) : set_over_is(true);
  };

  // toggle
  const [toggle_is, set_toggle_is] = useState(false);
  useEffect(() => {
    set_toggle_is(toggle_is);
  }, [toggle_is]);
  const toggle_state = () => {
    toggle_is ? set_toggle_is(false) : set_toggle_is(true);
  };

  return (
    <button
      onClick={toggle_state}
      onMouseEnter={mouse_state}
      onMouseLeave={mouse_state}
      style={cell_style(over_is)}
    >
      {children}
    </button>
  );
}

Cell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default function RadioGrid() {
  //let radio_elem = ['0', '1', '3', '4', '5', '6', '7', '8'];
  let radio_elem = [
    <Cell key="0">truc</Cell>,
    <Cell key="1">machin</Cell>,
    <Cell key="2">bidule</Cell>,
    <Cell key="3">truc</Cell>,
    <Cell key="4">machin</Cell>,
    <Cell key="5">bidule</Cell>,
    <Cell key="6">truc</Cell>,
    <Cell key="7">machin</Cell>,
    <Cell key="8">bidule</Cell>,
  ];

  return (
    <div>
      <div style={grid_style}>
        {radio_elem.map((x, i) => (
          <Cell key={i}>{x}</Cell>
        ))}
      </div>
      <Link to="/" className="App-link">
        go home
      </Link>
    </div>
  );
}

// export const Test = () => {
//   return (
//     <div className="App-header">
//       <Link to="/" className="App-link">
//         go home
//       </Link>
//     </div>
//   );
// };

// export default Test;
