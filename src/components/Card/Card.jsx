import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './Card.style';
import Button from '../Button/Button';

const Card = ({ item, onToggle, updateQty, deleteItem }) => {
  const [toggle, setToggle] = useState(false);
  const [showImg, setShowImg] = useState('');
  let [qty, setQty] = useState(item.item_quantity);
  let [id, setId] = useState(item.id);

  useEffect(() => {
    setShowImg('data:image/png;base64,' + item.item_image);
  });

  //CONVERT IMAGE

  //ADD QTY

  const Inc = () => {
    qty++;
    setQty(qty);
    setId(item.id);
    updateQty(id, qty);
  };

  //MIN QTY

  const Dec = () => {
    qty--;
    setQty(qty);
    setId(item.id);
    updateQty(id, qty);
  };

  return (
    <S.CardBlock>
      <S.CardImage src={showImg} />
      <h2>Name: {item.item_name}</h2>
      <h3>Color: {item.item_color}</h3>
      <h4>Size: {item.item_size}</h4>
      <Button
        onToggle={() => {
          setToggle(!toggle);
        }}
      >
        Change qty
      </Button>

      {toggle === true && (
        <S.ButtonBlock>
          <Button color="primary" addQty={Inc}>
            +
          </Button>
          <Button color="secondary" minQty={Dec}>
            -
          </Button>
        </S.ButtonBlock>
      )}
      <h5>Quantity: {qty}</h5>
      <Button color="secondary" type="button" deleteItem={() => deleteItem(id)}>
        DELETE ITEM
      </Button>
    </S.CardBlock>
  );
};

Card.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
