import React from 'react';

const Filter = ({ handleFilterChange }) => {
    return (
        <div className="container mb-4">
            <div className="row justify-content-end">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title or subtitle"
                        onChange={(event) => handleFilterChange(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;
