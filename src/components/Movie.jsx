import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import actions from "../redux/actions";

export class Movie extends Component {
  render() {
    return (
      <Col key={this.props.movie.id} className="text-center mt-3">
        <div className="img-thumbnail">
          <img
            src={`https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}
            alt=""
            width={200}
            height={300}
          />
          <div className="caption">
            <p>{this.props.movie.original_title}</p>
            {this.props.favorites.find(
              (item) => item.id === this.props.movie.id
            ) ? (
              <Button
                variant="danger"
                onClick={() =>
                  this.props.dispatch(actions.removeFavorites(this.props.movie))
                }
              >
                <AiFillHeart />
              </Button>
            ) : (
              <Button
                variant="danger"
                onClick={() =>
                  this.props.dispatch(actions.addFavorites(this.props.movie))
                }
              >
                <AiOutlineHeart />
              </Button>
            )}
          </div>
        </div>
      </Col>
    );
  }
}

export default Movie;
