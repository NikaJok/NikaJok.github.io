import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='wrapper'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/registration' component={SignUp} />
            <Route path='/:user_id' component={Users} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
