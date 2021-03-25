import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import Movie from "./Movie";

export class MovieFavorites extends Component {
  render() {
    return (
      <Row className="mt-5">
        {this.props.favorites &&
          this.props.favorites.map((movie) => (
            <Movie
              movie={movie}
              dispatch={this.props.dispatch}
              favorites={this.props.favorites}
              key={movie.id}
            />
          ))}
      </Row>
    );
  }
}

const mapStateToProps = (state, dispatch) => ({
  favorites: state.favoriteReducer,
  dispatch,
});

export default connect(mapStateToProps)(MovieFavorites);
