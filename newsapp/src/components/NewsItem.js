import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {

    let {title,description,imageUrl,newsUrl,author,publishedDate} = this.props;
    
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/60D4/production/_128988742_gettyimages-1247118853.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title!=null?title.slice(0,48):""}..</h5>
            <p className="card-text">
             {description!=null?description.slice(0,88):""}..
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {publishedDate}</small></p>
            <a href={newsUrl} className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
