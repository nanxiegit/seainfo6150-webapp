
import React from "react";
import DynamicArticle from "./DynamicArticle";

describe("DynamicArticle tests", () => {
  it("renders correctly", () => {
    const article = {
        title: "You can take a pie on a plane",
        image: {
          "_url": "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg"
        },
    };
    const { container } = render(<DynamicArticle  article={article} />);
    expect(container).toMatchSnapshot();
  });
});