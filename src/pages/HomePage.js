import React, { useState, useEffect } from 'react';
import { getBooks } from '../api/api';
import BookList from '../components/BookList';
import Filter from '../components/Filter';
import CustomPagination from '../components/Pagination';
import Sort from '../components/Sort';
import { sortBooks, filterBooks } from '../utils/helpers';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            const allBooks = await getBooks();
            setBooks(allBooks);
            setTotalPages(Math.ceil(allBooks.length / 9));
        };
        fetchBooks();
    }, []);

    const handleFilterChange = (value) => {
        setFilterValue(value);
        setCurrentPage(1);
    };

    const handleSortChange = (value) => {
        setSortValue(value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredBooks = filterBooks(books, filterValue);
    const sortedBooks = sortBooks(filteredBooks, sortValue);
    const startIndex = (currentPage - 1) * 8;
    const selectedBooks = sortedBooks.slice(startIndex, startIndex + 8);

    return (
        <div>
            <div className='my-3'>
                <Filter handleFilterChange={handleFilterChange} />
                <Sort handleSortChange={handleSortChange} />
            </div>

            <BookList books={selectedBooks} />
            <CustomPagination
                totalPagesCount={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default HomePage;
