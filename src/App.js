import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ThankYou from './pages/ThankYou';
import Shop from './pages/Shop'

function App() {

  const [orderCodigo, setOrderCodigo] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/salir" component={ThankYou}>
          <ThankYou orderCodigo={orderCodigo} setOrderCodigo={setOrderCodigo}></ThankYou>
        </Route>
        <Route path="/">
          <Shop orderCodigo={orderCodigo} setOrderCodigo={setOrderCodigo}></Shop>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
