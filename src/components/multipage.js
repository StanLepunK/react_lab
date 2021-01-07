import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Test from '../pages/test';
import RadioGrid from '../pages/radio_grid';
// import Result from '../pages/test';

// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react/41970301#41970301
const Multipage = () => {
  return (
    <BrowserRouter>
      <Switch>
        {' '}
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/test/" component={Test}></Route>
        <Route exact path="/radio_grid/" component={RadioGrid}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Multipage;
