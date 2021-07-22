import React from 'react';
import Card from '../Card/Card';

const Cards = ({ items, onToggle, updateQty, deleteItem }) => {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          updateQty={updateQty}
          onToggle={onToggle}
          deleteItem={deleteItem}
        />
      ))}
    </>
  );
};

export default Cards;
