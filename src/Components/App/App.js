import React from 'react';
import './App.css';
import './MediaQuery.css';

import Header from '../Header/Header';
import PostsList from '../PostsList/PostsList';
import Post from '../PostsList/Post';
import SearchResults from '../PostsList/SearchResults';
import SubRedditPostsList from '../PostsList/SubRedditPostsList';

import ScrollToTop from '../ScrollToTop/ScrollToTop';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/search/:id" exact component={SearchResults} />
          <Route path="/subreddit/:id" exact component={SubRedditPostsList} />
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
