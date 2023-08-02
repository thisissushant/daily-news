import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7cd92cfda0184fe8992431c851cd0f8c";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }
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
      </div>
    );
  }
}

export default News;
