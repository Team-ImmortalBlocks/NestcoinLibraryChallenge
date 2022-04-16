import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const BookHolder = () => (
  <div class="col">
    <div class="card shadow-sm">
      
      <img src="./web3"/>

      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          doloribus eligendi aperiam suscipit accusantium, illum dolores velit
          ipsam sed quia?
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <Stack direction="horizontal" gap={1}>
            {/* <Button class="btn btn-md btn-outline-secondary">Info</Button> */}
            <Button class="btn btn-md btn-outline-secondary">Read</Button>
          </Stack>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
);

export default BookHolder;
