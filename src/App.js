/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TvShows from './components/TvShows';
import MovieShows from './components/MovieShows';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/tvshows" component={TvShows} />
          <Route path="/movieshows" component={MovieShows} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
