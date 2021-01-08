import '../App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const grid_style = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
};

const cell_style = (select_is) => {
  let cursor_is = `auto`;
  if (cursor_is) cursor_is = `pointer`;
  let bg_color = 'yellow';
  if (select_is) bg_color = `orange`;

  return {
    width: `100%`,
    height: `250px`,
    border: `0`,
    padding: `0`,
    cursor: cursor_is,
    color: 'red',
    backgroundColor: bg_color,
  };
};

function Cell(props) {
  // function Cell({ children }) {
  // function Cell({ children, ...props }) {
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
      style={cell_style(toggle_is)}
    >
      {/* {children} */}
      {console.log('props.value', props.value)}
      {props.value}
    </button>
  );
}

Cell.propTypes = {
  children: PropTypes.string.isRequired,
  // props: PropTypes.element,
  // value: PropTypes.element,
  value: PropTypes.string,
};

export default function RadioGrid() {
  let list = [
    <Cell key="a" value="truc"></Cell>,
    <Cell key="b" value="truc"></Cell>,
    <Cell key="c" value="truc"></Cell>,
    <Cell key="d" value="truc"></Cell>,
    <Cell key="e" value="truc"></Cell>,
    <Cell key="f" value="truc"></Cell>,
    <Cell key="g" value="truc"></Cell>,
    <Cell key="h" value="truc"></Cell>,
    <Cell key="i" value="truc"></Cell>,
  ];

  return (
    <div>
      {/* <div style={grid_style}>{list.map((elem, index) => elem)}</div> */}
      <div style={grid_style}>
        {list.map((elem, index) => (
          <Cell key={index} value={elem.value} />
        ))}
      </div>
      <Link to="/" className="App-link">
        go home
      </Link>
    </div>
  );
}
