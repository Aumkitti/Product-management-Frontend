import React from 'react';

const Categories = ({ allCategories, filterItems }) => {
  return (
    <div className="categories">
      {allCategories.map((category, index) => (
        <button
          type="button"
          className="btn btn-outline-primary"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
