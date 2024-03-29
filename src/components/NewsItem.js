import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  const mystyle = {
    width: "100%",
    height: "15vw",
    objectFit: "cover",
  };
  return (
    <div className="my-3">
      <div className="card" style={{ mystyle }}>
        <img
          src={
            !imageUrl
              ? "https://www.hindustantimes.com/ht-img/img/2023/08/01/1600x900/Nationalist-Congress-Party-leaders-Ajit-Pawar--lef_1690868092734.jpg"
              : imageUrl
          }
          className="card-img-top h-100 w-100 over"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              {" "}
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toLocaleDateString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
