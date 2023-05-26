import React from "react";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { postRequest2 } from "../../utility/apiRequest";
import { ToastContainer, toast } from "react-toastify";

const AddTeamModal = () => {
    const {venturename} = useParams();
    const validationSchema = Yup.object().shape({
        email: Yup.string().
        required("Email is required"),
        role: Yup.string()
        .required("Role is required")
    })
   
    const handleForm = async(e: any) => {   
        const apiRequest = await postRequest2(`ventures/${venturename}/send-invitation`, e)
        if (apiRequest.status === 200) {
            toast.success("Profile updated successfully.")
        }
        if (apiRequest.errors.status === 'fail') {
            toast.error(apiRequest.errors.message);
        }
    }
    return(
        <>
            <div className="modal fade modal-blur" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header border-0 mb-3">
                        <h1 className="modal-title px-3 mx-1 fs-5" id="exampleModalLabel">Add team member</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <ToastContainer />
                    <div className="modal-body ">
                        <Formik validationSchema={validationSchema} initialValues={{
                            email: '',
                            role: ''
                        }}
                        onSubmit={handleForm}>
                            {
                                (props) => {
                                    const {errors, touched, dirty} = props;
                                    return(
                                        <Form>
                                            <div className="row px-3 mx-1">
                                             <div className="col-md-12 my-2 my-lg-3 px-2">
                                                    <label htmlFor="name" className="signup__col--label mb-2">Email Address</label>
                                                    <Field 
                                                        placeholder="Email address" 
                                                        type="text"
                                                        name="email"

                                                        className={ touched.email && errors.email? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="email" component="div" className="error text-danger"/>
                                                </div>
                                                <div className="col-md-12 my-2  px-2">
                                                    <label htmlFor="role" className="signup__col--label mb-2">Role</label>
                                                    <Field 
                                                        placeholder="Role" 
                                                        type="text"
                                                        name="role"

                                                        className={ touched.role && errors.role? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="role" component="div" className="error text-danger"/>
                                                </div>
                                                <div className="modal-footer border-0">
                                                    <button type="button" className="profile__details--edit rounded py-3" data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" className="ventures--button py-3 px-lg-4">Send Invite</button>
                                                </div>
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
    }
export default AddTeamModal;