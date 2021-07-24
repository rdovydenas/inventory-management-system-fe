import React, { useState } from 'react';
import * as S from './Add.style';
import Button from '../../components/Button/Button';

import { useHistory } from 'react-router-dom';

function AddItem(item, history) {
  fetch(
    `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: item.name,
        color: item.color,
        size: item.size,
        quantity: item.quantity,
        image: item.image,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      history.push('/dashboard');
      console.log(data);
    })
    .catch((err) => err.message);
}

const Add = () => {
  const history = useHistory();
  const [item, setItems] = useState({
    name: '',
    color: '',
    size: '',
    quantity: '',
    image: '',
  });

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
        AddItem(item, history);
      }}
    >
      <S.Input
        type="text"
        name="name"
        minLength="4"
        maxLength="100"
        placeholder="Item Name ex. Turkish Line Jeans"
        required
        onChange={(e) => setItems({ ...item, name: e.target.value })}
      />
      <S.Input
        type="text"
        name="color"
        maxLength="15"
        placeholder="Color ex. Blue"
        required
        onChange={(e) => setItems({ ...item, color: e.target.value })}
      />
      <S.Input
        type="text"
        name="size"
        maxLength="10"
        placeholder="Size ex. 32/34"
        required
        onChange={(e) => setItems({ ...item, size: e.target.value })}
      />
      <S.Input
        type="number"
        name="quantity"
        placeholder="Quantity ex. 64"
        onChange={(e) => setItems({ ...item, quantity: e.target.value })}
        required
      />
      <S.Input
        type="file"
        name="image"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = function (event) {
            setItems({
              ...item,
              image: btoa(unescape(encodeURIComponent(event.target.result))),
            });
          };
          reader.readAsText(file);
          console.log(file);
        }}
        required
      />
      <Button type="submit" color="primary" handleClick="submit">
        Confirm
      </Button>
    </S.Form>
  );
};

export default Add;
