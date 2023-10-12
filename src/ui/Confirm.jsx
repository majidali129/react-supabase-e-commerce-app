import { createPortal } from "react-dom";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const Confirm = ({ message }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <Button variation="primary" onClick={() => setIsShowModal(true)}>
        Show Modal
      </Button>
      {isShowModal &&
        createPortal(
          <div>
            <Modal
              isOpen={isShowModal}
              onCloseModal={() => setIsShowModal(false)}
            >
              <ConfirmDelete resourceName='Product' />
            </Modal>
          </div>,
          document.body
        )}
    </>
  );
};

export default Confirm;
