import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieFavorites from "./components/MovieFavorites";
import MovieResults from "./components/MovieResults";
import Search from "./components/Search";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="container">
            <div className="jumbotron text-center">
              <h1>Movie's Club</h1>
              <h5>Who doesn't like movies?</h5>
            </div>
            <Search />
            <Route path="/favs">
              <MovieFavorites />
            </Route>
            <Route path="/" exact>
              <MovieResults />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
