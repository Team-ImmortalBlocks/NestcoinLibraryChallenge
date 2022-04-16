import { ethers } from "ethers";
import { ERC20ABI as abi } from "../ABI/nestLib";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

const SearchBox = (props) => {
  // Get the user address
  const { address, handleConnectWallet, connection } = props;

  const [show, setShow] = useState(false);

  // Set the components connection state
  const [isConnected, setConnection] = useState(false);

  // Set the Url for IPFS upload
  const [fileUrl, updateFileUrl] = useState(``);

  // Set the Progress for upload the file
  const [isLoading, setLoading] = useState(false);

  const SMART_CONTRACT_ADDRESS = "0xe3FdBBc4e19Fe6C5E0efdBC9Dc0d8Fa4D7B7BFB1";

  useEffect(() => {
    if (address !== "") {
      setConnection(true);
    } else {
      setConnection(false);
    }
  }, [address]);

  //  Handle User events of this component
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      // set the state for our file Url
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }

    e.preventDefault();
  }

  //  The function sends the book to our Smart contract
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fileUrl);

    const title = e.target.title.value;
    const hash = fileUrl;
    const visibility = e.target.visibility.value;
    const description = e.target.description.value;

    const signer = connection.getSigner();

    const contract = new ethers.Contract(SMART_CONTRACT_ADDRESS, abi, signer);

    // add the file
    contract
      .addFile(title, visibility, hash, description, address)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>File Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="e.g 3 Golden lamps"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Set Visibility</Form.Label>
              <Form.Select
                name="visibility"
                aria-label="Default select example"
              >
                <option>Choose</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digital File (PDF, Mp3)</Form.Label>
              <Form.Control
                name="ipfsHash"
                onChange={onChange}
                type="file"
                placeholder="e.g 3 Golden lamps"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              required
            >
              <Form.Label>File Description</Form.Label>
              <Form.Control name="description" as="textarea" rows={3} />
            </Form.Group>

            <Button type="submit" variant="primary">
              Upload File
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <section class="py-5 mt-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="hero-text">Nest Library</h1>
            <p class="lead text-muted mt-4">
              Many Rivers flows into one, 2 ❤️ heart becomes one, Nest Library a
              decentralized place for creatives thoughts and ideas.
            </p>

            {isConnected ? (
              <Button
                disabled={isLoading}
                variant="primary"
                size="lg"
                className="btn btn-primary btn-circle btn-xl"
                onClick={() => handleShow()}
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faArrowsSpin} />
                ) : (
                  <FontAwesomeIcon icon={faFileCirclePlus} />
                )}
              </Button>
            ) : (
              <Button onClick={() => handleConnectWallet()} variant="primary">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBox;
