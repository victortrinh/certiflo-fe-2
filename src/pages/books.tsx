import { Book, booksApi } from '../api/endpoints/book';
import { BookData, ErrorData } from '../api/response';
import { useEffect, useState } from 'react';

export const Books = () => {
  const [books, setBooks] = useState<Book[]>();
  const [errorMessages, setErrorMessages] = useState<string>();

  useEffect(() => {
    const getBooks = async () => {
      await booksApi.get().then((data) => {
        if (data.isError) {
          setErrorMessages((data as ErrorData).response);
        } else {
          setBooks((data as BookData).response);
        }
      });
    };

    getBooks();
  }, []);

  if (!books) {
    return <>No books here!</>;
  }

  return (
    <>
      {errorMessages && errorMessages}
      {books.map((book) => (
        <div key={book.Id}>{book.Name}</div>
      ))}
    </>
  );
};
