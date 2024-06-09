import "./style.css";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      {children}
    </div>
  )
}

export default Modal;
