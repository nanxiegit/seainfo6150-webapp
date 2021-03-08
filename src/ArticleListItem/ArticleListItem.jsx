import React from "react";

const ArticleListItem = ({props}) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <time dateTime={props.timeStamp}>{props.displayDate}</time>
            <p>{props.shortText}</p>
        </article>

    );
};


export default ArticleListItem;