
export const filterBooks = (books, filterValue) => {
    if (filterValue === '') {
        return books;
    }

    return books.filter(
        (book) =>
            book.title.toLowerCase().includes(filterValue.toLowerCase()) ||
            book.subtitle.toLowerCase().includes(filterValue.toLowerCase())
    );
};

export const sortBooks = (books, sortValue) => {
    switch (sortValue) {
        case 'title_asc':
            return [...books].sort((a, b) => a.title.localeCompare(b.title));
        case 'title_desc':
            return [...books].sort((a, b) => b.title.localeCompare(a.title));
        case 'author_asc':
            return [...books].sort((a, b) => a.author.localeCompare(b.author));
        case 'author_desc':
            return [...books].sort((a, b) => b.author.localeCompare(a.author));
        default:
            return books;
    }
};
