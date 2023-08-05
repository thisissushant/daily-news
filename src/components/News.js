import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7cd92cfda0184fe8992431c851cd0f8c&page=1pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7cd92cfda0184fe8992431c851cd0f8c=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7cd92cfda0184fe8992431c851cd0f8c=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2>Daily News - Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((Element) => {
            return (
              <div className="col-md-4" key={Element.url}>
                <NewsItem
                  title={Element.title ? Element.title.slice(0, 45) : ""}
                  description={
                    Element.description ? Element.description.slice(0, 83) : ""
                  }
                  imageUrl={Element.urlToImage}
                  newsUrl={Element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
