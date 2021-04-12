import React from "react";
import ArticleListItem from "./ArticleListItem";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const article = {
        "image": {
            "_url": "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg"
          }
    };
    const { container } = render(<ArticleListItem article={article} />);
    expect(container).toMatchSnapshot();
  });
});