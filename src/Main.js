import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, HashRouter } from 'react-router-dom';
import { Navbar } from './Layout/Navbar';
import Home from './Content/Home';
import Movies from './Content/Movies';
import Music from './Content/Music';
import './css/index.css';

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <br />
          <div className="content bxd container">
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={Movies} />
              <Route path="/music" component={Music} />
            </Container>
          </div>
        </div>
      </HashRouter>
    );
  }
}
