/**
 * ErrorModal Component
 *
 * Description:
 * This component represents a modal dialog that displays an error message to the user
 * when their character count is outside the allowed range (50-4000 characters).
 * It utilizes React-Bootstrap components for styling and functionality.
 *
 * Props:
 * - `props`: Contains properties passed down to the modal, such as `onHide` to handle the close action.
 *
 * Features:
 * - Displays an error title and message to inform users of the character count limit.
 * - Provides a close button to dismiss the modal.
 * - Centers the modal on the screen.
 */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/ErrorModal.css";
import PropTypes from "prop-types"; // Import PropTypes

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

// PropTypes validation
ErrorModal.propTypes = {
  onHide: PropTypes.func.isRequired, // Ensures onHide is a required function
};

export default ErrorModal;
