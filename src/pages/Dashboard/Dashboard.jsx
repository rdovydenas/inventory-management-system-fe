import React, { useState, useEffect, useContext } from 'react';
import * as S from './Dashboard.style';
import Card from '../../components/Card/Card';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

const dataa = [
  {
    id: 66,
    item_name: 'Loading..',
    item_color: 'Black',
    item_size: 'S',
    item_quantity: 45,
  },
];

const Dashboard = () => {
  const [data, setData] = useState(dataa);
  const [search, setSearch] = useState();
  const authContext = useContext(AuthContext);
  const history = useHistory();

  if (!authContext.auth) {
    // history.push('/');
  }
  useEffect(() => {
    fetch('http://localhost:2000/content', {
      headers: {
        authorization: `Beared ${authContext.auth}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [authContext.auth]);

  const filteredSearch = data.filter((items) =>
    items.item_name.toLowerCase().includes(search)
  );

  return (
    <div className="wrapper">
      <S.Input
        type="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></S.Input>
      <S.FlexContainer>
        {filteredSearch.length > 1
          ? filteredSearch.map((item) => {
              return (
                <Card
                  id={item.id}
                  image={item.item_image}
                  color={item.item_color}
                  name={item.item_name}
                  size={item.item_size}
                  quantity={Number(item.item_quantity)}
                  key={item.id}
                />
              );
            })
          : data.map((item) => {
              return (
                <Card
                  id={item.id}
                  image={item.item_image}
                  color={item.item_color}
                  name={item.item_name}
                  size={item.item_size}
                  quantity={Number(item.item_quantity)}
                  key={item.id}
                />
              );
            })}
      </S.FlexContainer>
    </div>
  );
};

export default Dashboard;