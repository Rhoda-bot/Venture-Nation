import React from "react";

const DeleteInviteModal = () => {
    return(
        <>


        <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header  border-0 mb-3">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm delete</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              <p>Are you sure you want to remove this invitation from your venture?</p>
            </div>
            <div className="modal-footer border-0">
                <button type="button" className="btn  btn-outline-light text-dark" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn  btn-outline-danger">Delete Invite</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default DeleteInviteModal;