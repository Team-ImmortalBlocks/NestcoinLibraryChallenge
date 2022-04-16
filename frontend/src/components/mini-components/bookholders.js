import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const BookHolder = (props) => {
  const { book, address } = props;

  // const { title, description, hash } = book;
  return (
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
              <Button class="btn btn-md btn-outline-primary">Info</Button>
              <Button variant="outline-success" class="btn btn-md">
                Share <FontAwesomeIcon icon={faShare} />
              </Button>
            </Stack>
            {/* <small class="text-muted">owners</small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHolder;
