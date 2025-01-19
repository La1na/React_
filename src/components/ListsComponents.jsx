import React from 'react';

const ListsComponent = () => {
  return (
    <div>
      <h2>Ordered List</h2>
      <ol>
        <li>Item 1</li>
        <li>
          Item 2
          <ol>
            <li>Nested Item 1</li>
            <li>Nested Item 2</li>
          </ol>
        </li>
      </ol>
      <h2>Unordered List</h2>
      <ul>
        <li>Item A</li>
        <li>
          Item B
          <ul>
            <li>Nested Item A</li>
            <li>Nested Item B</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ListsComponent;
