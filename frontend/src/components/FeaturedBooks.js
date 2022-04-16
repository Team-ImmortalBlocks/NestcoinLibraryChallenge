import { useState, useEffect } from "react";
import BookHolder from "./mini-components/bookholders";

const FeaturedBooks = (props) => {
  // Get the connec string from the props
  const { connection } = props;

  // Set the for the featured book
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    async function fetchFeatureBooks(setFeaturedBooks) {
      //  Retrieve book from Smart Contract
      const res = await connection.retrievePublicFile();

      // Set featured books state
      setFeaturedBooks(res);
    }

    // Call the function
    fetchFeatureBooks(setFeaturedBooks);
  }, [connection, setFeaturedBooks]);

  return (
    <div id="featured" class="album py-5 bg-light">
      <div class="container">
        <h2 class="mb-5 text-center">Our Featured Files 🥳</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {featuredBooks.map((book) => (
            <BookHolder />
          ))}

          <BookHolder />
          <BookHolder />
          <BookHolder />
          <BookHolder />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
