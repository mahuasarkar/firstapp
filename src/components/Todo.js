import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop.js";
function Todo(props) {
  const [checkMState, changeMState] = useState(false);
  function openModal() {
    changeMState(true);
  }
  function closeModal() {
    changeMState(false);
  }
  return (
    <div className="card">
      <h2>{props.heading}</h2>
      <div className="actions">
        <button className="btn" onClick={openModal}>
          Delete
        </button>
      </div>{" "}
      {checkMState && <Modal click={closeModal} />}
      {checkMState ? <Backdrop click={closeModal} /> : null}
    </div>
  );
}
export default Todo;
