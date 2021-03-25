import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import actions from "../redux/actions";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      page: 1,
      error: {
        err: false,
        msg: "Everything's Fine, bro",
      },
    };
  }
  URL =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    process.env.REACT_APP_API_KEY;

  searchMovie = (event) => {
    event.preventDefault();

    this.state.query &&
      fetch(this.URL + `&page=${this.state.page}&query=${this.state.query}`)
        .then((data) => {
          data.status !== 200
            ? this.setState({
                error: {
                  err: true,
                  msg: "No Internet Connection. Please try again.",
                },
              })
            : this.setState({ error: { err: false } });
          return data.json();
        })
        .then(({ results }) => {
          if (results.length <= 0) {
            this.setState({
              error: {
                err: true,
                msg: "No Movies found. Try another keyword.",
              },
            });
          } else {
            this.setState({ error: { err: false } });
            console.log("object");
            this.props.dispatch(actions.addMovies(results));
          }
        });
    this.props.history.push("/");
  };
  updateInput = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Form onSubmit={(e) => this.searchMovie(e)} style={{ width: "75%" }}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search for Movie as SpiderMan: HomeComing"
                  value={this.state.query}
                  onChange={(e) => this.updateInput(e)}
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          <Link to="/favs">
            <Button>Favorites</Button>
          </Link>
        </Row>
        {this.state.error.err && (
          <Button variant="danger" disabled className="text-center mt-5">
            {this.state.error.msg}
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default withRouter(connect(mapStateToProps)(Search));
