import React, { useState } from 'react';
import * as S from './Add.style';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

function AddItem(item, history) {
  fetch(`http://localhost:2000/content/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: item.name,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
      // image: item.image,
    }),
  })
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
    // image: '',
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
        maxLength="255"
        placeholder="Item name"
        required
        onChange={(e) => setItems({ ...item, name: e.target.value })}
      />
      <S.Input
        type="text"
        name="color"
        maxLength="15"
        placeholder="Color"
        required
        onChange={(e) => setItems({ ...item, color: e.target.value })}
      />
      <S.Input
        type="text"
        name="size"
        maxLength="1"
        placeholder="Size "
        required
        onChange={(e) => setItems({ ...item, size: e.target.value })}
      />
      <S.Input
        type="number"
        name="quantity"
        placeholder="Quantity "
        onChange={(e) => setItems({ ...item, quantity: e.target.value })}
        required
      />
      {/* <S.Input
        type="file"
        name="image"
        onChange={(e) => {
          const fr = new FileReader();

          fr.onloadend = function () {
            alert(fr.result.substring(0, 100));
          };

          fr.readAsBinaryString(e.target.files[0]);
          setItems({ ...item, image: e.target.files[0] });
        }}
      /> */}
      <Button type="submit" color="primary" handleClick="submit">
        Confirm
      </Button>
    </S.Form>
  );
};

export default Add;
