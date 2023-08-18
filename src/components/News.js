import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);
  //document.title = `${cfl(props.category)} - Headlines`;

  const cfl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cd92cfda0184fe8992431c851cd0f8c&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setarticles(parseData.articles);
    settotalResult(parseData.totalResult);
    setloading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePreviousClick = async () => {
    setpage(page - 1);
    updateNews();
  };
  const handleNextClick = async () => {
    setpage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=7cd92cfda0184fe8992431c851cd0f8c&page=1&pageSize=${
      props.pageSize
    }&page=${page + 1}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    settotalResult(parseData.totalResult);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ marginTop: "90px" }}>
        Headline - Top {cfl(props.category)} Headlines
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loading={<Spinner />}
      ></InfiniteScroll>
      <div className="row">
        {articles.map((Element) => {
          return (
            <div className="col-md-4" key={Element.url}>
              <NewsItem
                title={Element.title ? Element.title.slice(0, 45) : ""}
                description={
                  Element.description ? Element.description.slice(0, 83) : ""
                }
                imageUrl={Element.urlToImage}
                newsUrl={Element.url}
                author={Element.author}
                date={Element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousClick}
        >
          {" "}
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResult / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
