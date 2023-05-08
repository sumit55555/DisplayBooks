
import { BOOK_DATA } from '../utils/constants';
export const getBooks = async () => {
    const data = BOOK_DATA[0].books;
    console.log("sumit", data);

    return data;
};
