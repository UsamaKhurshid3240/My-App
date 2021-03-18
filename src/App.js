import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Page1 from './component/page1'
import Page2 from './component/page2'

class App extends Component {

  render() {
    return (
      <Router>

        <div className="App">


         
          <Route exact path="/page1" component={Page1} />

        
        </div>
        <Route exact path="/page2" component={Page2} />

      </Router>
    );
  }
}


export default Page1(App);