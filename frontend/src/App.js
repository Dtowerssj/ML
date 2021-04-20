import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">

      <header className="row">
        <div>
          <a className="brand" href="/">ML</a>
        </div>
        <div>
          <a href="/signin">Inicio de sesion</a>
        </div>
      </header>

      <main>
        <Route path="/producto/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
       
      </main>

      <footer className="row center">ML - Todos los derechos reservados</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
