import React, { useState } from "react";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import Metrics from "./venture-metrics";
import VentureHistory from "./venture-history";

const VentureOview = () => {
    const [loading, setIsLoading] = useState<boolean>(false)
    const ValidationSchema = Yup.object().shape({
        fullTimeEmployees: Yup.number().typeError("Please enter a valid number")
        .required("FT Employees required"),
         partTimeEmployees: Yup.number().typeError("Please enter a valid number")
        .required("PT Employees is required"),
       amtOfRaisedFund: Yup.number().typeError("Please enter a valid number").required(" External Funding Raised is required"),
       averageSalary : Yup.number().typeError("Please enter a valid number").required("Average salary is required"),
    })

    const handleSubmitForm = async(e: any) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);

        }, 3000)
    }
    return (
        <>
            <div className="general">
                <div className="container">
                    <div className="row">
                    <div className="general__header py-4 px-5">
                            <h4 className="profile__details--name">Overview</h4>
                            <p className="profile__details--location">Attach your other social media account to your profile. </p>
                    </div>
                    <div className="col-md-12">
                    <Formik initialValues={{
                        fullTimeEmployees: '',
                        partTimeEmployees: '',
                        amtOfRaisedFund: '',
                        averageSalary: ''

                    }} validationSchema={ValidationSchema} onSubmit={handleSubmitForm}>
                        {
                            (props) => {
                                const {errors, touched, dirty, isValid} = props
                                return(
                                    <Form>
                                        <div className="row px-4">
                                            <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="name" className="signup__col--label mb-2">Number of full-time employees</label>
                                                    <Field 
                                                        placeholder="00" 
                                                        type="text"
                                                        name="fullTimeEmployees"
                                                        className={ touched.fullTimeEmployees && errors.fullTimeEmployees? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="fullTimeEmployees" component="div" className="error text-danger"/>
                                            </div>
                                            <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="name" className="signup__col--label mb-2">Number of part-time workers</label>
                                                    <Field 
                                                        placeholder="00" 
                                                        type="text"
                                                        name="partTimeEmployees"
                                                        className={ touched.partTimeEmployees && errors.partTimeEmployees? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="partTimeEmployees" component="div" className="error text-danger"/>
                                            </div>
                                            <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="name" className="signup__col--label mb-2">Amount of external funding raised</label>
                                                    <Field 
                                                        placeholder="00" 
                                                        type="text"
                                                        name="amtOfRaisedFund"
                                                        className={ touched.amtOfRaisedFund && errors.amtOfRaisedFund? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="amtOfRaisedFund" component="div" className="error text-danger"/>
                                            </div>
                                            <div className="col-md-6 my-2 my-lg-3 px-2">
                                                    <label htmlFor="name" className="signup__col--label mb-2">Average salary</label>
                                                    <Field 
                                                        placeholder="00" 
                                                        type="text"
                                                        name="averageSalary"
                                                        className={ touched.averageSalary && errors.averageSalary? `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inpisIvalid` : `form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp`}
                                                    />
                                                    <ErrorMessage name="averageSalary" component="div" className="error text-danger"/>
                                            </div>
                                            <div className="my-2 px-0 mb-3 mb-lg-4 text-end">
                                            {
                                                    loading ? (

                                                        <button className={!( dirty && isValid)? 'disabled-btn signup__col--btn disabled' : 'signup__col--btn'} disabled>
                                                           <div className="spinner-grow" style={{width: '2rem',height: '2rem'}} role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                            </div></button>
                                                    ):(
                                                        <>
                                                        <button type='submit'
                                                        className={
                                                            !(dirty && isValid) ? 'disabled-btn signup__col--btn signup__col--disabled' : "signup__col--btn py-3 ms-0 w-100 fw-bold"
                                                        }
                                                        >
                                                             
                                                           Save Changes
                                                        </button>

                                                        </>
                                                    )
                                                }
                                                    {/* <button className="py-3 ms-0 px-4 fw-bold ventures--button" type="submit" style={{
                                                        minWidth: '160px'
                                                    }}>Save Changes</button> */}
                                         </div>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                    </div>
                    </div>
                    <Metrics />
                    <VentureHistory />
                </div>
            </div>
        </>
    )
}
export default VentureOview;