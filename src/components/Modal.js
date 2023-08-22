import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Modal Title</div>
        <div className="modal-body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          sint ab ex odio pariatur et eius? Nam, quod eum adipisci earum nisi
          tempora, nesciunt esse voluptate illo, maxime consectetur harum!
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
