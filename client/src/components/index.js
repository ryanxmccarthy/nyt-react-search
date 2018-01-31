import React, { Component } from "react";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";

const authKey = 
const queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
const results = 10;

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadSaved();
  }

  loadSaved = () => {
    API.getSaved()
      .then(res => this.setState({ articles: res.data, topic: "", startYear: "", endYear: ""}))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state)
  }
}