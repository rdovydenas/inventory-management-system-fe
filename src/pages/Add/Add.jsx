import React, { useState, useContext } from 'react';
import * as S from './Add.style';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../contexts/authContext';
import { useHistory } from 'react-router-dom';

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Add = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const [item, setItems] = useState({
    name: '',
    color: '',
    size: '',
    quantity: '',
    image: '',
  });

  function AddItem(item, history) {
    fetch(
      `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/add`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Beared ${authContext.auth}`,
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
      })
      .catch((err) => err.message);
  }

  return loader === true ? (
    <Loader />
  ) : (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
        setLoader(!loader);
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
        onChange={(e) =>
          setItems({
            ...item,
            name:
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
          })
        }
      />
      <S.Input
        type="text"
        name="color"
        maxLength="15"
        placeholder="Color ex. Blue"
        required
        onChange={(e) =>
          setItems({
            ...item,
            color:
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
          })
        }
      />
      <S.Input
        type="text"
        name="size"
        maxLength="10"
        placeholder="Size ex. 32/34"
        required
        onChange={(e) =>
          setItems({
            ...item,
            size:
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
          })
        }
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
