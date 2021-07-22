import React from 'react';
import Card from '../Card/Card';

const Cards = ({ items, onToggle, updateQty }) => {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          updateQty={updateQty}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Cards;
