import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Paises from './pages/Paises';
import About from './pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Paises} />
      <Route path="/About" exact component={About} exact />
    </Switch >
  );
}