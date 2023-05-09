
import { BOOK_DATA } from '../utils/constants';
export const getBooks = async () => {
    const data = BOOK_DATA[0].books;
    console.log("sumit", data);

    return data;
};
// export const getBooks = async () => {
//     try {
//       const response = await fetch("https://www.jsonkeeper.com/b/VOII");
//       const data = await response.json();
//       console.log("check", data);
  
//       return data.books;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
//   };