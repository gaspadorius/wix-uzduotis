import React from 'react';

const ImperativeCategories = ({categories}) => {
  return (
    <ul>
      {categories.map(
        category => (
          <>
            <li>{category.title}</li>
            {category.options && (
              <RecursiveCategories categories={category.options}/>
            )}
          </>
        )
      )}
    </ul>
  )
}

export default ImperativeCategories;
