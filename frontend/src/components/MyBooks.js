import BookHolder from "./mini-components/bookholders";

// TODO WE ARE TO RETRIEVE ALL FILE UPLOADED BY THE CURRENT OWNER

// const arr_book = await abi_connect.getbooks(address);

const FeaturedBooks = () => (
  <div class="album py-5 bg-white">
    <div class="container py-5">
      <h2 class="mb-5 text-center">My Files 😄</h2>

      <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <BookHolder />
        <BookHolder />
        <BookHolder />
        <BookHolder />
        <BookHolder />
      </div>
    </div>
  </div>
);

export default FeaturedBooks;
