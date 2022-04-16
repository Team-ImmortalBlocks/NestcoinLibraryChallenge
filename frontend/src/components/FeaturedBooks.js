import BookHolder from "./mini-components/bookholders";

const FeaturedBooks = () => (
  <div class="album py-5 bg-light">
    <div class="container">
      <h2 class="mb-5 text-center">Our Featured Files 🥳</h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <BookHolder />
        <BookHolder />
        <BookHolder />
      </div>
    </div>
  </div>
);

export default FeaturedBooks;
