import React from "react";
import { Link } from "react-router-dom";
import Line from "./Line";

const Modal = ({ isOpened, setModal }) => {
  return (
    <>
      {isOpened && (
        <div className="modal">
          <div>
            <i onClick={setModal} class="fas fa-times-circle fa-lg"></i>
            <Link to="/signup">
              <button onClick={setModal}>S'inscrire</button>
            </Link>
            <Line />
            <Link to="/login">
              <button onClick={setModal}>Se connecter</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
