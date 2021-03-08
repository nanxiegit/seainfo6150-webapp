import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = ({artlist}) => {

    if (artlist.length == 0) {
        return 'You have no data!';
      }

    return (
        <div>
            {artlist.map(props => <ArticleListItem key={props.slug} props={props}/>)}
        </div>
    );

};

export default ArticleList;