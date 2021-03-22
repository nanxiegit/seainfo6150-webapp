import React,{Fragment,useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles from './ArticleListItem.module.css';


const ArticleListItem = (props) => {

  const [showMore, setClick] = useState(false);
  const [buttonText, setButtonText] = useState('show more')

  const onClick = () => {
    setClick(!showMore);
    if (showMore) {
      setButtonText('Show more');
    } else {
      setButtonText('Show less');
    }
  };

  return (
    <li>
      <article>
        <Link to={'/articlelist/'+ props.article.slug}>
          <h2 className={styles.articleListItemStyle}>{props.article.title}</h2>
        </Link>

        {showMore && (
          <Fragment>
            <time dateTime={props.article.timeStamp}>
              {props.article.displayDate}
            </time>
            <p>{props.article.shortText}</p>
          </Fragment>
      )}
        <ArticleTextToggleButton buttonText={buttonText} onClick={onClick} />
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
