import '../App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// https://dev.to/mrscx/creating-a-radio-button-component-in-react-1l1a
// https://codepen.io/sethdavis512/pen/WEERNY
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
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
  // context
  const context = useContext(RadioGroupContext);

  console.log('props.value', props.value);
  console.log('context.onMouseEnter', context.onMouseEnter);
  console.log('context.onClick', context.onClick);
  console.log('context.is', context.is);

  return (
    <button
      {...context}
      // onClick={toggle_state}
      // onMouseEnter={mouse_state}
      // onMouseLeave={mouse_state}
      style={cell_style(context.is === 'true')}
      // style={cell_style(toggle_is)}
    >
      {props.value}
    </button>
  );
}

Cell.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  is: PropTypes.bool,
};

// USE RADIO BUTTON
function useRadioButtons(name) {
  // const [value, setState] = useState(null);

  // const handleChange = (event) => {
  //   setState(event.target.value);
  // };
  //overs
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

  const button_props = {
    onClick: toggle_state,
    onMouseEnter: mouse_state,
    onMouseLeave: mouse_state,
    is: toggle_is.toString(),
    // style: {cell_style(toggle_is)},
  };

  return [toggle_is, button_props];
}
// CONTEXT
const RadioGroupContext = createContext();

function RadioGroup({ children, name, onClick, onMouseEnter, onMouseLeave }) {
  const [state, button_props] = useRadioButtons(name);
  return (
    <RadioGroupContext.Provider value={button_props}>
      {children}
    </RadioGroupContext.Provider>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.string,
  onMouseLeave: PropTypes.string,
};

export default function RadioGrid() {
  let list = [
    <Cell key="a" value="AAA" is={false}></Cell>,
    <Cell key="b" value="BBB" is={false}></Cell>,
    <Cell key="c" value="CCC" is={false}></Cell>,
    <Cell key="d" value="DDD" is={false}></Cell>,
    <Cell key="e" value="EEE" is={false}></Cell>,
    <Cell key="f" value="FFF" is={false}></Cell>,
    <Cell key="g" value="GGG" is={false}></Cell>,
    <Cell key="h" value="HHH" is={false}></Cell>,
    <Cell key="i" value="III" is={false}></Cell>,
  ];

  return (
    <div>
      <Link to="/" className="App-link">
        go home
      </Link>
      <div style={grid_style}>
        <RadioGroup name="radio grid">
          {list.map((elem, index) => (
            <Cell key={index} value={elem.props.value} is={elem.props.is}>
              {elem.props.value}
            </Cell>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
