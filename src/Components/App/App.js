import React from 'react';
import './App.css';
import './MediaQuery.css';

import Header from '../Header/Header';
import PostsList from '../PostsList/PostsList';
import Post from '../PostsList/Post';
import SearchResults from '../PostsList/SearchResults'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/default/:id" exact component={Post} />
          <Route path="/search/:id" exact component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
