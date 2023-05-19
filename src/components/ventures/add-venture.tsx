import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import Tag from "../reusables/tag";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddVenture = ( ) => {

    const [sector, setSector] = useState<any>([])
    const [model, setModel] = useState<any>([])
    const [description, setDescription] = useState<string>('')

    const ValidationSchema = Yup.object().shape({
        name: Yup.string(),
        location: Yup.string(),
        description: Yup.string(),
        dateFounded: Yup.string(),
        link: Yup.string(),
        sector: Yup.string(),
        businessModel: Yup.string(),
        stage: Yup.string(),
        tagline: Yup.string(),
        linkedin: Yup.string(),
        twitter: Yup.string(),
        instagram: Yup.string(),
        facebook: Yup.string(),
    })

    const validate = (values: any) => {
        const errrors: any = {};
        if (!values.name) {
            errrors.name = "Name is required."
        }
        if (!values.stage) {
            errrors.stage = "Stage is required."
        }
        if (!values.location) {
            errrors.location = "Location is required"
        }
    }
    const handleDescription = (value: any) => {
        setDescription(value);
    }
    const sumbitForm = (values: any) => {
        values
    }
    return(
        <>
            <div className="addventure bg-white">
                <div className="container">
                    <div className="row mt-5 pt-lg-4 pt-xxl-5">
                        <div className="col-lg-5 pe-lg-4 pe-xxl-5">
                            <div className="mb-3 mb-xxl-4">
                                <span>
                                    <i className="fa fa-arrow-left"/> Back to profile
                                </span> 
                                <h5>Add a new venture</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut diam congue dui felis est tortor. Enim diam suspendisse aenean egesta</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                           <Formik initialValues={{
                            name: '',
                            dateFounded: '',
                            link: '',
                            sector: '',
                            businessModel: '',
                            stage: '',
                            tagline: ''
                           }} validationSchema={ValidationSchema} onSubmit={sumbitForm}>
                                {
                                    (props) => {
                                        const {touched} = props;
                                        return(
                                            <Form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="name">Venture name <span>(required)</span></label>
                                                    <Field 
                                                        placeholder="Venture name" 
                                                        type="text"
                                                        name="name"
                                                        className="form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    Date founded
                                                    <Field 
                                                        type="date"
                                                        name="dateFounded"
                                                        className="form-control
                                                        p-2
                                                        p-lg-3
                                                         shadow-none signup__col--inp"
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="tag">Venture tagline</label>
                                                    <Field 
                                                        placeholder="Tagline"
                                                        type="text"
                                                        name="tagline"
                                                        className="shadow-none
                                                        p-2
                                                        p-lg-3
                                                         form-control signup__col--inp"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="stage">Stage <span>(required)</span></label>
                                                    <Field as="select" name="gender" className="form-select shadow-none p-2 p-lg-3
                                                                 signup__col--inp" aria-label="Default select example">
                                                                 <option defaultValue={"Pre-seed"} value="Pre-seed">Pre-seed</option>
                                                                 <option value="Seed">Seed</option>
                                                                 <option value="Seed">Series A</option>
                                                                 <option value="Seed">Series B</option>
                                                                 <option value="Seed">Series C & Beyond</option>
                                                                 <option value="Seed">Mezzanine</option>
                                                                 <option value="Seed">Exit</option>
                                                              
                                                    </Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="location">Location <span>(required)</span></label>
                                                    <Field 
                                                        placeholder="Location"
                                                        type="text"
                                                        name="location"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    Overview 
                                                    <label htmlFor="sector">Sector <span>(required)</span></label>
                                                    <Tag setSkills={setSector} skills={sector}/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="model">Customer model <span>(required)</span></label>
                                                     <Tag setSkills={setModel} skills={model}/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="description">Description <span>(required)</span></label>
                                                    <ReactQuill 
                                                        value={description}
                                                        className="form-control"
                                                        placeholder="Compose an epic..."
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <h5>Attach the link to either your website or your pitch deck.</h5>
                                                    <label htmlFor="link">Link</label>
                                                    <Field 
                                                        placeholder=""
                                                        type="text"
                                                        name="link"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <h5>Social profiles</h5>
                                                <div className="col-md-6 position-relative">
                                                    <label htmlFor="linkedIn">LinkedIn profile link</label>
                                                    <img src="/assets/icons/Linkedin.svg" className="position-absolute start-25 top-50" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="linkedin"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <label htmlFor="linkedIn">Twitter profile link</label>
                                                    <img src="/assets/icons/Linkedin.svg" className="position-absolute start-25 top-50" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="twitter"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <div className="col-md-6 position-relative mb-3">
                                                    <label htmlFor="linkedIn">Instagram profile link</label>
                                                    <img src="/assets/icons/Linkedin.svg" className="position-absolute start-25 top-50" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="instagram"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <div className="col-md-6 position-relative mb-3">
                                                    <label htmlFor="linkedIn">Facebook profile link</label>
                                                    <img src="/assets/icons/facebook.svg" className="position-absolute start-25 top-50" alt="" />
                                                    <Field 
                                                        placeholder="https://"
                                                        type="text"
                                                        name="facebook"
                                                        className="shadow-none form-control signup__col--inp p-2 p-lg-3"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3" />
                                                <div className="col-md-4 mb-3">
                                                    <button className="signup__col--btn" type="submit">Continue</button>
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
export default AddVenture