import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
Modal.setAppElement("#root");

interface Styles {
  overlay: { [key: string]: string | number };
  content: { [key: string]: string | number };
}

interface ImageModalProps {
  onClose: () => void;
  modalIsOpen: boolean;
  urlBig: string;
  alt: string;
}

const customStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "azure",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  onClose,
  modalIsOpen,
  urlBig,
  alt,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <button className={css.button} onClick={onClose}>
          <IoIosCloseCircleOutline />
        </button>
        <div>
          <img src={urlBig} alt={alt} />
          <p className={css.description}>{alt}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
