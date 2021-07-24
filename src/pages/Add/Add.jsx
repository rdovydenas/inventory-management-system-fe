import React, { useState } from 'react';
import * as S from './Add.style';
import Button from '../../components/Button/Button';

import { useHistory } from 'react-router-dom';

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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
          toBase64(e.target.files[0]).then((file) =>
            setItems({ ...item, image: file })
          );
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
