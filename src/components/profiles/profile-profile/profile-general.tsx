import React, { useContext, useRef, useState } from "react";
import Tag from "../../reusables/tag";
import { Fade } from "reactstrap";
import { UserContext } from "../../../context/userContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { patchRequest, patchRequestAvatar } from "../../../utility/apiRequest";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import countries from '../../../utility/countries.json';

const GeneralProfile = () => {
    const [skills, setSkills] = useState<any>([]);
    const {user}: any = useContext<any>(UserContext);
    const [loading, setIsLoading] = useState(false);
    const imgRef = useRef<any>()
   
    const validationSchema = Yup.object().shape({
        name: Yup.string(),
        nationality: Yup.string(),
        phone: Yup.string(),
        dob: Yup.string(),
        bio: Yup.string(),
        gender: Yup.string(),
        skills: Yup.string()

      })
    const handleForm =async (values: any) => {
        console.log({...values, skills});
        const api =await patchRequest(`users/${user.email}`, {...values,skills});
        console.log(api);
        if (api.status === 200) {
            toast.success("Profile updated successfully.")
        }
        if (api.data.errors) {
            toast.error(api.data.errors.message);
        }
        
    }
    const handleGetImage = async (e: any) =>{
        const avatar = imgRef.current?.files[0];
        setIsLoading(true);
       console.log(avatar);
       
        const formData = new FormData();
            formData.append('image', avatar, avatar.name) 
       
        const result = await patchRequestAvatar('users/update-avatar', formData);
        console.log(result);
        
        if (result.status == 200) {
            console.log(result);
            
            toast.success("Image updated successfully")
            setIsLoading(false);
        }else{
            console.log(result);
            toast.error("Image updated unsuccessfully")
        }
    }
    return(
        <>
           <Fade>
            <div className="general">
                    <div className="container">
                        <div className="row">
                            <div className="general__header py-4 px-5">
                                <h4 className="profile__details--name">General</h4>
                                <p className="profile__details--location">Personalize and keep your profile up-to-date.</p>
                            </div>
                          <ToastContainer />
                            <div className="row align-items-center profile__box px-3 mx-2">
                                 <div className=" col-sm-4 col-md-6 position-relative">
                                    <h6>Profile image</h6>
                                    <img src={(user?.avatar === null) ? "/assets/profile/ava.png": user?.avatar} className="img-fluid  profile__details--avatar" style={{
                                        borderRadius: '50%',
                                        border: '5px solid white'
                                    }} alt="" />
                                    <div className="profile__updateavatar">
                                        <label htmlFor="updateavatar" role="button">
                                            <img src="/assets/profile/upload.svg" alt="" />
                                            <input id="file-input" type="file" onChange={handleGetImage} ref={imgRef}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer />
                            <div className="col-md-12">
                                <Formik 
                                enableReinitialize
                                initialValues={{
                                    name: user?.name,
                                    nationality: user?.nationality,
                                    phone: user?.phone,
                                    dob: user?.dob,
                                    bio: user?.bio,
                                    gender: user?.gender,
                                    skills: user?.skills
                                }}
                                onSubmit={handleForm}

                                >
                                      {
                                        (props) => {
                                            const {touched} = props;
                                            return(
                                                <Form>
                                                <div className="row px-3 mx-1">
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="name" className="className='signup__col--label">Full name</label>
                                                     <Field type="text" 
                                                     className="form-control py-3 px-3 shadow-none
                                                     signup__col--inp" 
                                                     placeholder="Full name"
                                                     name="name"
                                                     />
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                 <label htmlFor="gender" className="className='signup__col--label">Gender</label>
                                                 <Field as="select" name="gender" className="form-select px-3 py-3 shadow-none
                                                     signup__col--inp" aria-label="Default select example">
                                                     <option defaultValue={"male"} value="male">Male</option>
                                                     <option value="female">Female</option>
                                                  
                                                 </Field>
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="phone" className="className='signup__col--label">Phone</label>
                                                     <Field 
                                                         placeholder="Phone no"
                                                         className="form-control shadow-none
                                                         signup__col--inp px-3 py-3"
                                                         name="phone"
                                                         
                                                     />
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="phone" className="className='signup__col--label">Nationality</label>
                                                        
                                                            <Field as="select" name="nationality" className="form-select px-3 py-3 shadow-none
                                                            signup__col--inp" aria-label="Default select example">
                                                                {
                                                                   countries.map((val:any) => (
                                                                <option  key={val.name}>{val.name}</option>
                                                            
                                                    
                                                            )) }
                                                        </Field>
                                                 </div>
                                                 <div className="col-md-12 mb-3">
                                                     <label htmlFor="dob" className="className='signup__col--label">Date of birth</label>
                                                     <Field type="date" 
                                                     className="form-control px-3 py-3 shadow-none
                                                     signup__col--inp" name="dob"
                                                     
                                                     />
                                                 </div>
                                                 <div className="col-md-12">
                                                    {user?.skills}
                                                     <Tag setSkills={setSkills} skills={skills}/>
                                                 </div>
                                                 <div className="col-md-12 mb-3 ">
                                                 <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                                                 <Field as="textarea" className="form-control px-3 py-3 shadow-none
                                                     signup__col--inp" name="bio" id="exampleFormControlTextarea1" rows={3} >

                                                     </Field>
                                                     <p>Brief description for your profile.</p>
                                                 </div>
                                                 <div className="col-md-8"></div>
                                                 <div className="col-md-4 text-end py-3">
                                                     <button
                                                         type="submit"
                                                         className={"signup__col--btn px-3 py-3"}
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
                <div className="row mt-3">
                           <div className="my-3">
                           <div className="col-md-12 p-3 mt-3 my-3 bg-white venturedetails__card">
                                
                                <div className="d-flex align-items-start mb-2">
                                      <div>
                                        <h6 className="mb-2 fw-bold">Delete this venture</h6>
                                        <p className="profile__details--mail">Enable your venture to be visible to the public</p>
                                      </div>
                                      <label htmlFor="" className="ms-4 ms-auto my-4">
                                      <div className="form-check form-switch">
                                        <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>
                                      </label>
                                </div>
                            </div>
                           </div>
                </div>
           </Fade>
        </>
    )
}
export default GeneralProfile;