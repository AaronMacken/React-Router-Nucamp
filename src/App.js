import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";



function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route exact path="/about" render={props => <AboutPage {...props} />} />
          <Route render={props => <ContactPage {...props} />}/>
          <Redirect to="/" />
        </Switch>
        {/* <LandingPage />
        <AboutPage />
        <ContactPage /> */}
      </div>
    </Router>

  );
}

export default App;
