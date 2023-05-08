import React from "react";

const BookView = ({ book }) => {
    return (
        <div className="container mt-4 mx-auto">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={book.image} alt={book.title} />
                </div>
                <div className="col-md-6">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{book.subtitle}</h6>
                    <p className="card-text">{book.price}</p>
                    <a href={book.url} className="btn btn-primary">
                        View Book
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookView;