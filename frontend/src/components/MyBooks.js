import { useState, useEffect } from "react";
import BookHolder from "./mini-components/bookholders";

const MyBooks = (props) => {
  // Get the connec string from the props
  const { connection, address } = props;

  // Set the for the featured book
  const [myBooks, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks(setBooks) {
      //  Retrieve book from Smart Contract
      const res = await connection.retrievePrivateFile(address);
      // Set featured books
      setBooks(res);
    }

    // Call the function fetchBooks function
    fetchBooks(setBooks);
  }, [address, connection, setBooks]);

  return (
    <div id="mybooks" class="album py-5 bg-white">
      <div class="container py-5">
        <h2 class="mb-5 text-center">My Files 😄</h2>

        <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <BookHolder />
          <BookHolder />
          <BookHolder />
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
