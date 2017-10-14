import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../reducer";
import NewsList from "./NewsList";

class News extends Component {
  static initialAction() {
    return fetchNews();
  }

  componentDidMount() { // componentDidMount doesn't run in the server
    if (!this.props.news) { // fetch news if news props is empty
      this.props.dispatch(News.initialAction());
    }
  }

  render() {
    const { news } = this.props; // refactor news
    return <NewsList news={news} />;
  }
}

const mapStateToProps = state => ({ // function to connect redux state to props
  news: state.news
});

export default connect(mapStateToProps)(News); // connect redux state to News props