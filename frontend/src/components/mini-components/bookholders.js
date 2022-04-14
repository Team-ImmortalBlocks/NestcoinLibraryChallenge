import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const BookHolder = () => (
  <div class="col">
    <div class="card shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Book from IPFS
        </text>
      </svg>

      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          doloribus eligendi aperiam suscipit accusantium, illum dolores velit
          ipsam sed quia?
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <Stack direction="horizontal" gap={1}>
            <Button class="btn btn-md btn-outline-secondary">Info</Button>
            <Button class="btn btn-md btn-outline-secondary">Read</Button>
          </Stack>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
);

export default BookHolder;
