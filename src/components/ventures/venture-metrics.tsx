 import React from "react";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";

const Metrics = () => {
    const ValidationSchema = Yup.object().shape({
       revenue: Yup.string()
        .required("Revenue is required"),
        revenueDate: Yup.string()
        .required("Date is required"),
        users: Yup.string()
        .required("Users is required")
        ,
        userDate: Yup.string()
        .required("Date is required"),
        gtv: Yup.string()
        .required("GTV is required"),
        gtvDate: Yup.string()
        .required("Date is required")
    })
    const updateRevenue = (value: any) => {
        console.log(value);
    }
    const updateUser = (value: any) => {
        console.log(value);
    }
    const updateGtv = (value: any) => {
        console.log(value);
    }
    return(
        <>
            <div className="row  px-4">
                <h5 className="text-start">Metrics</h5>
                <p className="text-start">
                Input your revenue, number of customers and gross transaction value along with the corresponding date of record.
                </p>
                
                <Formik 
                    validationSchema={ValidationSchema}
                    initialValues={{
                        revenue: '',
                        revenueDate: ''
                    }}
                    onSubmit={updateRevenue}
                 >
                    {
                        (props) => {
                            const {errors, dirty, touched} =props;
                            return(
                                <Form>
                                    <div className="row">
                                    <div className="col-md-5 my-2 my-lg-3 px-2">
                                        <label htmlFor="revenue" className="signup__col--label mb-2">Date</label>
                                                        <Field 
                                                            placeholder="Venture name" 
                                                            type="date"
                                                            name="revenueDate"
                                                            className={ touched.revenueDate && errors.revenueDate? `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inpisIvalid` : `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inp`}
                                                        />
                                            <ErrorMessage name="revenueDate" component="div" className="error text-danger"/>
                                        </div>
                                        <div className="col-md-5 my-2 my-lg-3 px-2">
                                        <label htmlFor="revenue" className="signup__col--label mb-2">Revenue</label>
                                                        <Field 
                                                            placeholder="Venture name" 
                                                            type="text"
                                                            name="revenue"
                                                            className={ touched.revenue && errors.revenue? `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inpisIvalid` : `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inp`}
                                                        />
                                            <ErrorMessage name="revenue" component="div" className="error text-danger"/>
                                        </div>
                                        <div className="col-md-2 my-3 my-lg-3">
                                            <input name=""  className="py-3 m ms-0 px-4 mt-4 fw-bold profile__details--edit" type="submit" value="Update"/>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    }
                 </Formik>
                 <Formik 
                    validationSchema={ValidationSchema}
                    initialValues={{
                        users: '',
                        userDate: ''
                    }}
                    onSubmit={updateUser}
                 >
                    {
                        (props) => {
                            const {errors, dirty, touched} =props;
                            return(
                                <Form>
                                    <div className="row">
                                    <div className="col-md-5 my-2 my-lg-3 px-2">
                                        <label htmlFor="revenue" className="signup__col--label mb-2">Date</label>
                                                        <Field 
                                                            placeholder="Venture name" 
                                                            type="date"
                                                            name="userDate"
                                                            className={ touched.userDate && errors.userDate? `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inpisIvalid` : `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inp`}
                                                        />
                                            <ErrorMessage name="userDate" component="div" className="error text-danger"/>
                                        </div>
                                        <div className="col-md-5 my-2 my-lg-3 px-2">
                                        <label htmlFor="revenue" className="signup__col--label mb-2">Number of users</label>
                                                        <Field 
                                                            placeholder="Venture name" 
                                                            type="text"
                                                            name="revenue"
                                                            className={ touched.users && errors.users? `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inpisIvalid` : `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inp`}
                                                        />
                                            <ErrorMessage name="users" component="div" className="error text-danger"/>
                                        </div>
                                        <div className="col-md-2 my-3 my-lg-3">
                                            <input  className="py-3 m ms-0 px-4 mt-4 fw-bold profile__details--edit" type="submit" value="Update"/>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    }
                 </Formik>
                 <Formik 
                    validationSchema={ValidationSchema}
                    initialValues={{
                        gtv: '',
                        gtvDate: ''
                    }}
                    onSubmit={updateGtv}
                 >
                    {
                        (props) => {
                            const {errors, dirty, touched} =props;
                            return(
                                <Form>
                                    <div className="row">
                                    <div className="col-md-5 my-2 my-lg-3 px-2">
                                        <label htmlFor="revenue" className="signup__col--label mb-2">Date</label>
                                                        <Field 
                                                            placeholder="Venture name" 
                                                            type="date"
                                                            name="gtvDate"
                                                            className={ touched.gtvDate && errors.gtvDate? `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inpisIvalid` : `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inp`}
                                                        />
                                            <ErrorMessage name="gtvDate" component="div" className="error text-danger"/>
                                        </div>
                                        <div className="col-md-5 my-2 my-lg-3 px-2">
                                        <label htmlFor="revenue" className="signup__col--label mb-2">Number of users</label>
                                                        <Field 
                                                            placeholder="Venture name" 
                                                            type="text"
                                                            name="gtv"
                                                            className={ touched.gtv && errors.gtv? `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inpisIvalid` : `form-control
                                                            p-2
                                                            p-lg-3
                                                            shadow-none signup__col--inp`}
                                                        />
                                            <ErrorMessage name="gtv" component="div" className="error text-danger"/>
                                        </div>
                                        <div className="col-md-2 my-3 my-lg-3">
                                            <input  className="py-3 m ms-0 px-4 mt-4 fw-bold profile__details--edit" type="submit" value="Update" />
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    }
                 </Formik>
            </div>
        </>
    )
}
export default Metrics;