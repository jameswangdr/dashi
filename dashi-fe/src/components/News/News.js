import React from 'react';

const News = (props) => {
    // if (props.news) {
    //     props.news.map((article) => {
    //         console.log(article);
    //     });
    // }
  

    return (
        <div className="container">
            <div>
                    <a href={props.article.url} target="_blank">{props.article.title}</a>
                    <hr/>
            </div>
        </div>
    )
}

export default News;
