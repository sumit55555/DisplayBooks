import React from 'react';

const Sort = ({ handleSortChange }) => {
    return (
        <div className="container mb-4">
            <div className="row justify-content-end">
                <div className="col-md-3">
                    <select
                        className="form-select"
                        defaultValue=""
                        onChange={(event) => handleSortChange(event.target.value)}
                    >
                        <option value="" disabled>
                            Sort by
                        </option>
                        <option value="title_asc">Title (A-Z)</option>
                        <option value="title_desc">Title (Z-A)</option>

                    </select>
                </div>
            </div>
        </div>
    );
};

export default Sort;
