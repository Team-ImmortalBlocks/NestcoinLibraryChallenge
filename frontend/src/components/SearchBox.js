import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import handleSubmit from "./util/FileUpload";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

const SearchBox = (props) => {
  // Get the user address
  const { address } = props;

  // Get the wallet connection handler function
  const handleConnectWallet = props.handler;

  const [show, setShow] = useState(false);

  // Set the components connection state
  const [isConnected, setConnection] = useState(false);

  // Set the Url for IPFS upload
  const [fileUrl, updateFileUrl] = useState(``);

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
      updateFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }

    e.preventDefault();
  }

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
          <Form onSubmit={(e) => handleSubmit(e, fileUrl)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>File Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g 3 Golden lamps"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digital File (PDF)</Form.Label>
              <Form.Control
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
              <Form.Control as="textarea" rows={3} />
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
                variant="primary"
                size="lg"
                className="btn btn-primary btn-circle btn-xl"
                onClick={() => handleShow()}
              >
                <FontAwesomeIcon icon={faFileCirclePlus} />
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
