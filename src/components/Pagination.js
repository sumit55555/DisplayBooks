import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ totalPagesCount, currentPage, handlePageChange }) => {
    const pageItems = [];

    for (let number = 1; number <= totalPagesCount; number++) {
        pageItems.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handlePageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="container mt-3 d-flex justify-content-center">
            <Pagination>{pageItems}</Pagination>
        </div>
    );
};

export default CustomPagination;

