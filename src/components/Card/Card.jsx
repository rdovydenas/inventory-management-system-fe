import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './Card.style';
import Button from '../Button/Button';
import { AuthContext } from '../../contexts/authContext';

const Card = ({ size, image, quantity, name, color, onToggle, id }) => {
  const [toggle, setToggle] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(
      'https://inventory-management-system-be-mqsje.ondigitalocean.app/content',
      {
        headers: {
          authorization: `Beared ${authContext.auth}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => result);
  }, [authContext.auth]);

  let [aidi, setAidi] = useState(id);
  let [qty, setQty] = useState(quantity);

  const Inc = () => {
    qty++;
    setQty(qty);
    setAidi(aidi);
    updateQty(qty, aidi);
  };

  const Dec = () => {
    qty--;
    setQty(qty);
    setAidi(aidi);
    updateQty(qty, aidi);
  };

  const updateQty = (qty, aidi) => {
    fetch(
      `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/qty/${aidi}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Number(aidi),
          quantity: Number(qty),
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => err.message);
  };

  return (
    <S.CardBlock>
      <S.CardImage src={image} />
      <h2>Name: {name}</h2>
      <h3>Color: {color}</h3>
      <h4>Size: {size.toUpperCase()}</h4>
      <Button
        onToggle={() => {
          setToggle(!toggle);
        }}
      >
        Change qty
      </Button>
      <h5>Quantity: {qty}</h5>
      {toggle === true && (
        <S.ButtonBlock>
          <Button addQty={Inc} color="primary">
            +
          </Button>
          <Button minQty={Dec} color="secondary">
            -
          </Button>
        </S.ButtonBlock>
      )}
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
