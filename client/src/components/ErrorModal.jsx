import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/ErrorModal.css";

// Inspired by https://react-bootstrap.netlify.app/docs/components/modal/

function ErrorModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">ERROR</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Character Count Error</h4>
        <p>
          We are limited to maximum of <b>4000</b> characters and you must
          submit at least <b>50</b> characters. Please ensure your characters
          are in between <b>50</b> and <b>4000</b> characters.
        </p>
        <p>
          Sorry for the inconvenience, we will try to increase character limits
          later on.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button id="modal-button" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;