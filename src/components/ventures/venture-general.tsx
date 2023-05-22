import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Fade } from "reactstrap";
import Tag from "../reusables/tag";
import * as Yup from 'yup';

const VentureGeneral = () => {
    const [skills, setSkills] = useState<any>();
    const validationSchema = Yup.object().shape({
        name: Yup.string(),
        nationality: Yup.string(),
        phone: Yup.string(),
        dob: Yup.string(),
        bio: Yup.string(),
        gender: Yup.string()

      })

    const handleForm = (values:any) => {
        console.log(values);
        
    }
    return (
        <>
            <Fade>
            <div className="general bg-white">
                    <div className="container">
                        <div className="row">
                        <div className="general__header py-4 px-5">
                                <h4 className="profile__details--name">General</h4>
                                <p className="profile__details--location">You can keep your venture information and data up-to-date by editing the form fields below.</p>
                            </div>  
                            <div className="col-md-12 " style={{
                                backgroundImage: 'url(/assets/profile/venturebg.png)',
                                height: '170px',
                                width: '100%',
                            }}>
                                 <div className="file-upload mx-auto">
                                    <label htmlFor="file-input" className="">Upload local image</label>
                                    <input id="file-input" type="file" />
                                </div>
                                <div>
                                <img src={"/assets/profile/ava.png"} className="img-fluid  profile__details--avartar"  alt="" />
                                {/* <img src={(user?.avatar === null) ? "/assets/profiles/ava.png": user?.avatar} className="img-fluid  profile__details--avartar"  alt="" /> */}
                                </div>
                                
                            </div>
                            <div className="col-md-12 py-5 mt-5">
                                <Formik initialValues={{
                                    name: '',
                                    nationality: '',
                                    phone: '',
                                    dob: '',
                                    bio: '',
                                    gender: '',
                                }}
                                onSubmit={handleForm}
                                validationSchema={validationSchema}
                                >
                                      {
                                        (props) => {
                                            const {touched} = props;
                                            return(
                                                <Form>
                                                <div className="row">
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="name" className="className='signup__col--label">Venture name</label>
                                                     <Field type="text" 
                                                     className="form-control shadow-none
                                                     signup__col--inp" 
                                                     placeholder="Full name"
                                        
                                                     name="name"
                                                     />
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                 <label htmlFor="gender" className="className='signup__col--label">Year founded</label>
                                                 <Field as="select" name="gender" className="form-select shadow-none
                                                     signup__col--inp" aria-label="Default select example">
                                                     <option defaultValue={2022} value="2022">2022</option>
                                                     <option value="2023">2023</option>
                                                  
                                                 </Field>
                                                 </div>
                                                 <div className="col-md-12 mb-3">
                                                     <label htmlFor="tagline" className="className='signup__col--label">Venture tagline</label>
                                                     <Field type="text" 
                                                     className="form-control shadow-none
                                                     signup__col--inp" name="tagline"
                                                     placeholder="Tagline"
                                                     />
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="phone" className="className='signup__col--label">Phone</label>
                                                     <Field 
                                                         placeholder="Phone no"
                                                         className="form-control shadow-none
                                                         signup__col--inp"
                                                         name="phone"
                                                         
                                                     />
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="phone" className="className='signup__col--label">Nationality</label>
                                                     <Field 
                                                         placeholder="Nigeria"
                                                         className="form-control shadow-none
                                                         signup__col--inp"
                                                         name="nationality"
                                                         
                                                     />
                                                 </div>
                                                 <div className="col-md-12 mb-3">
                                                     <label htmlFor="dob" className="className='signup__col--label">Date of birth</label>
                                                     <Field type="date" 
                                                     className="form-control shadow-none
                                                     signup__col--inp" name="dob"/>
                                                 </div>
                                                 <div className="col-md-12">
                                                     <Tag setSkills={setSkills} skills={skills}/>
                                                 </div>
                                                 <div className="col-md-12 mb-3 ">
                                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                                                 <Field as="textarea" className="form-control shadow-none
                                                     signup__col--inp" name="bio" id="exampleFormControlTextarea1" rows={3}></Field>
                                                     <p>Brief description for your profile.</p>
                                                 </div>
                                                 <div className="col-md-8"></div>
                                                 <div className="col-md-4 text-end">
                                                     <button
                                                         type="submit"
                                                         className={"signup__col--btn"}
                                                        >
                                                         Save changes
                                                         </button>
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
           </Fade>
        </>
    )
}
export default VentureGeneral;
