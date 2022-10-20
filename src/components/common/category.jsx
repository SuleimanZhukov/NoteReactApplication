import React from "react";

const Category = ({ title }) => {
  return (
    <div className="category">
      <a>{title}</a>
      <a className="plus">+</a>
    </div>
  );
};

export default Category;
