import React, { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import * as S from './Dashboard.style';
import Pagination from '../../components/Pagination/Pagination';
import Cards from '../../components/Cards/Cards';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import Loader from '../../components/Loader/Loader';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  let [search, setSearch] = useState('');
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const addPage = () => {
    history.push('/add');
  };

  if (!token) {
    history.push('/');
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //SHOW ITEMS

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        'https://inventory-management-system-be-mqsje.ondigitalocean.app/content',
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Beared ${token}`,
          },
        }
      );
      const data = await res.json();

      return data;
    };

    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setData(itemsFromServer);
    };
    getItems();
  }, [authContext.auth, token]);

  //UPDATE QTY

  const updateQty = async (id, qty) => {
    const res = await fetch(
      `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/qty/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Beared ${authContext.auth}`,
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
    if (window.confirm('Delete the item?') === true) {
      const res = await fetch(
        `https://inventory-management-system-be-mqsje.ondigitalocean.app/content/item/${id}`,
        {
          method: 'DELETE',
          headers: {
            authorization: `Beared ${authContext.auth}`,
          },
        }
      );
      const result = await res.json();
      console.log(result);
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="wrapper">
      <S.H1>Inventory Management System</S.H1>
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
        {data.length < 1 ? (
          <Loader />
        ) : (
          <Cards
            deleteItem={deleteItem}
            updateQty={updateQty}
            items={
              search === ''
                ? currentPosts
                : data.filter((items) =>
                    items.item_name.toLowerCase().includes(search.toLowerCase())
                  )
            }
          />
        )}
      </S.FlexContainer>
      {search.length > 0 ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={currentPosts.length}
          paginate={paginate}
        />
      ) : (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Dashboard;
