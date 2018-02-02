import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleTopicChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Search</h3>
              </div>
              <div class="panel-body">
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">Topic</span>
                  <input onChange={this.handleTopicChange} type="text" class="form-control" aria-describedby="basic-addon1" />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">Start Year</span>
                  <input type="text" class="form-control" aria-describedby="basic-addon1" />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">End Year</span>
                  <input type="text" class="form-control" aria-describedby="basic-addon1" />
                </div>
                <br />
                <button type="button" class="btn btn-primary">Search</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Results</h3>
              </div>
              <div class="panel-body" id="results">
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Saved Articles</h3>
              </div>
              <div class="panel-body" id="saved">
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
