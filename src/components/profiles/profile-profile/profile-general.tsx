import React, { useContext, useState } from "react";
import Tag from "../../reusables/tag";
import { Fade } from "reactstrap";
import { UserContext } from "../../../context/userContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { patchRequest } from "../../../utility/apiRequest";
import axios from "axios";
import { NavLink } from "react-router-dom";

const GeneralProfile = () => {
    const [skills, setSkills] = useState<any>([]);
    const {user}: any = useContext<any>(UserContext);
    const [avatar, setAvatar] = useState<any>();
    const [loading, setIsLoading] = useState(false);
   
    const validationSchema = Yup.object().shape({
        name: Yup.string(),
        nationality: Yup.string(),
        phone: Yup.string(),
        dob: Yup.string(),
        bio: Yup.string(),
        gender: Yup.string()

      })
    const handleForm = (values: any) => {
        console.log({...values, skills});
        
        // const api =await patchRequest(`users/${user.email}`, {...values,skills});
        // console.log(api);
        axios.patch(`users/${user.email}`,  {...values,skills}, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
               'Content-Type': 'multipart/json',
            }
         }).then((response) => console.log(response))
            .catch((error) => console.log(error.response))
        
        
    }
    const saveAvatar = async () => {
        setIsLoading(true);
        const formData = new FormData();
        if (avatar.name) {
            formData.append('image', avatar, avatar.name) 
        }else{
            formData.append("image", avatar, "image.png");
        }
        const result = await patchRequest('users/update-avatar', formData);
        if (result.status == 200) {
            setIsLoading(false);
        }
        
    }
    return(
        <>
           <Fade>
            <div className="general bg-white">
                    <div className="container">
                        <div className="row">
                            <h4 className="profile__details--name">General</h4>
                            <p className="profile__details--location">Personalize and keep your profile up-to-date.</p>
                            <div className="profile__banner" style={{
                            backgroundImage: 'url(/assets/profile/pro2.png)',
                            height: '190px',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            objectFit: 'cover',
                            backgroundPosition: 'center center',
                            borderRadius: '0px 0px 30px 0px'
                        }}>
                            <div className="row align-items-center profile__box">
                                 <div className=" col-sm-4 col-md-6">
                                    <img src={(user?.avatar === null) ? "/assets/profiles/ava.png": user?.avatar} className="img-fluid  profile__box--avartar"  alt="" />
                                </div>
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

                                >
                                      {
                                        (props) => {
                                            const {touched} = props;
                                            return(
                                                <Form>
                                                <div className="row">
                                                 <div className="col-md-6 mb-3">
                                                     <label htmlFor="name" className="className='signup__col--label">Full name</label>
                                                     <Field type="text" 
                                                     className="form-control shadow-none
                                                     signup__col--inp" 
                                                     placeholder="Full name"
                                        
                                                     name="name"
                                                     />
                                                 </div>
                                                 <div className="col-md-6 mb-3">
                                                 <label htmlFor="gender" className="className='signup__col--label">Gender</label>
                                                 <Field as="select" name="gender" className="form-select shadow-none
                                                     signup__col--inp" aria-label="Default select example">
                                                     <option defaultValue={"Male"} value="male">Male</option>
                                                     <option value="female">Female</option>
                                                  
                                                 </Field>
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
export default GeneralProfile;