import React from "react";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { postRequest2 } from "../../utility/apiRequest";
import { ToastContainer, toast } from "react-toastify";

const DeleteVentureModal = () => {
    const {venturename} = useParams();
   
    return(
        <>
            <div className="modal fade modal-blur" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header border-0 mb-3">
                        <h1 className="modal-title px-3 mx-1 fs-5" id="exampleModalLabel">Confirm delete</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <ToastContainer />
                    <div className="modal-body ">
                       <p>
                       This will permanently delete <b>{venturename}</b>. Deleting this venture will also delete all the associated data.
                       </p>
                       <p>You have <b>12 days</b> to undo this operation by following instructions that will be sent to your email</p>
                       <p>Are you sure you want to <b className="text-danger fw-bold">permanently delete</b> venture name?</p>
                    </div>
                     <div className="modal-footer border-0">
                    <button type="button" className="profile__details--edit rounded py-3" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="ventures--button py-3 px-lg-4">Delete Venture</button>
                    </div>
                              
                    </div>
                    </div>
                </div>
        </>
    )
    }
export default DeleteVentureModal;