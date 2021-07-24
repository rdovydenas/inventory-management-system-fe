import React, { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import * as S from './Dashboard.style';
import Cards from '../../components/Cards/Cards';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

const Dashboard = () => {
  const [data, setData] = useState([]);
  let [search, setSearch] = useState('');
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const addPage = () => {
    history.push('/add');
  };

  //GET ITEMS

  const fetchItems = async () => {
    const res = await fetch(
      'https://inventory-management-system-be-mqsje.ondigitalocean.app/content',
      {
        headers: {
          authorization: `Beared ${authContext.auth}`,
        },
      }
    );
    const data = await res.json();

    return data;
  };

  //SHOW ITEMS

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setData(itemsFromServer);
    };
    console.log(data);
    getItems();
  }, [authContext.auth]);

  //UPDATE QTY

  const updateQty = async (id, qty) => {
    const res = await fetch(
      `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/qty/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Number(id),
          quantity: Number(qty),
        }),
      }
    );
    const result = await res.json();
    console.log(result);
  };

  //DELETE ITEM

  const deleteItem = async (id) => {
    console.log(id);
    const res = await fetch(
      `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/item/${id}`,
      {
        method: 'DELETE',
      }
    );
    const result = await res.json();
    console.log(result);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      <div className="topSection">
        <S.Input
          type="search"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></S.Input>
        <Button type="submit" color="primary" onAdd={addPage}>
          Add an item
        </Button>
      </div>
      <S.FlexContainer>
        <Cards
          deleteItem={deleteItem}
          updateQty={updateQty}
          items={data.filter((items) => {
            if (search === '') {
              return items;
            } else if (
              items.item_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            }
          })}
        />
      </S.FlexContainer>
    </div>
  );
};

export default Dashboard;
