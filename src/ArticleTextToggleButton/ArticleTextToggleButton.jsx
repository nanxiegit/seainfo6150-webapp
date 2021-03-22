import React from "react";
import PropTypes from "prop-types";
import styles from './ArticleTextToggleButton.module.css';

const ArticleTextToggleButton = ({buttonText, onClick}) => {
    return (
        <button className={styles.articleTextToggleButton} type="button" onClick={onClick}>{buttonText}</button>
      );
    };

ArticleTextToggleButton.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleTextToggleButton;
