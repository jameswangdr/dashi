import React from 'react';
import './News.css'

const News = (props) => {

    return (
        <div className="news-article-container">
                <a href={props.article.url} target="_blank"> 
                    <img className="article-img" src={props.article.urlToImage}></img>
                    <p className="article-link">{props.article.title}</p>
                </a>
                <hr />
        </div>
    )
}

export default News;
