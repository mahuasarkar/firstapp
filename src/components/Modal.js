function Modal(props){
    return(
        <div className="modal">
            <button className="btn btn--alt" onClick={props.click}>Cancel</button>
            <button className="btn" onClick={props.click}>Ok</button>
        </div>
    );
}
export default Modal;