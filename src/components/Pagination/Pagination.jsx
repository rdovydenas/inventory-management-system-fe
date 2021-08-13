import React from 'react';
import * as S from './Pagination.style';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <S.Nav>
      <S.Ul className="pagination">
        {pageNumbers.map((number) => (
          <S.Li key={number}>
            <S.Link
              onClick={() => {
                paginate(number);
              }}
              href="#"
            >
              {number}
            </S.Link>
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  );
};

export default Pagination;
