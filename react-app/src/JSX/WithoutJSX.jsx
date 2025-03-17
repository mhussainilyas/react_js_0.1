import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const WithoutJSX = () => {
  return _jsxs("section", {
    id: "section",
    children: [
      _jsx("h1", {
        children: "My Website",
      }),
      _jsxs("article", {
        children: [
          _jsx("h2", {
            children: "Welcome To React.",
          }),
          _jsx("p", {
            class: "text",
            children: "This is the paragraph content.",
          }),
        ],
      }),
    ],
  });
};

export default WithoutJSX;
