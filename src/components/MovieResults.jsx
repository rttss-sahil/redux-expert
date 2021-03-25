import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import Movie from "./Movie";

export class MovieResults extends Component {
  render() {
    return (
      <Row className="mt-5">
        {this.props.movies &&
          this.props.movies.map((movie) => (
            <Movie
              movie={movie}
              favorites={this.props.favorites}
              dispatch={this.props.dispatch}
              key={movie.id}
            />
          ))}
      </Row>
    );
  }
}

const mapStateToProps = (state, dispatch) => {
  console.log(state);
  return {
    movies: state.movieReducer,
    favorites: state.favoriteReducer,
    dispatch,
  };
};

export default connect(mapStateToProps)(MovieResults);
