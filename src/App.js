import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import { Route,Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component={Page404}/>
      </Switch>
    </>    
  );
}

export default App;
