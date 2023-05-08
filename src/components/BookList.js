import React from "react";
import Book from "./BookView";

const BookList = ({ books }) => {
    return (
        <div className="container mt-4 ml-10">
            <div className="row ">
                {books.map((book) => (
                    <div className="col-md-6" key={book.id}>
                        <Book book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;