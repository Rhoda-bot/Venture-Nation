import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CourseContext } from "../../context/userContext";
import { getRequest } from "../../utility/apiRequest";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const CardDetails = () => {
    const {slug} = useParams();
    const [course, setCourse] = useState<any>([]);
    useEffect(() => {
        const getCurrentCourse = async() => {
            const fetchCurrentCourse = await getRequest(`courses/${slug}`);
            return fetchCurrentCourse;
            
        }
        const result = getCurrentCourse();
        result.then((res:any) => {
            if (res.data.status === "success") {
                setCourse(res.data.data);
                
            }
        })
    }, []);
    console.log(course);
    const learningOutcomes = course?.learningOutcomes;
    
    return (
            <>
                <div className="carddetails my-5 py-5">
                   <div className="container">
                    <div className="row">
                       <div className="d-flex mb-2 align-items-center">
                       <NavLink to="/learning-hub" className="me-3 carddetails--link">Learning Hub</NavLink> <i className="fas  fa-greater-than mt-1 me-2"/> <b className="carddetails--subheading">Course Overview</b>
                       </div>
                        <div className="col-lg-8 col-xxl-8 pe-lg-5">
                            <div className="">     
                             <h5 className="card-title carddetails--title mb-3">{course.title}</h5>
                                <div className="" style={{
                                    backgroundImage: `url(${course?.image})`,
                                    width: '100%',
                                    height: '300px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    borderRadius: '10px'
                                }}/>
                                <div className="card-body carddetails__body">
                                    <h6 className="carddetails__body--title mt-3">About this course</h6>
                                    <p dangerouslySetInnerHTML={{__html: course?.description}}  className="carddetails__body--text"/>
                                    <h6 className="carddetails__body--title mt-3 mb-3">Course modules</h6>
                                    {course?.modules?.map((moduleItems:any, index:number) =>(
                                        <>
                                            <div key={index} className="accordion accordion-flush" id="accordionFlushExample">
                                               <div className="mb-2">
                                               <div className="accordion-item">
                                                    <h2 className="accordion-header" id={moduleItems.title}>
                                                    <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                                     data-bs-target={`#flush-${moduleItems.title}`} aria-expanded="false" aria-controls={`flush-${moduleItems.title}`}>
                                                         {moduleItems.title}
                                                     </button>
                                                    </h2>
                                                    <div id={`flush-${moduleItems.title}`} className="accordion-collapse collapse" aria-labelledby={`flush-${moduleItems.title}`}
                                                     data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">

                                                        </div>
                                                    </div>
                                                </div>
                                               </div>
                                            </div>
                                        </>
                                    ))}
                                    <h6 className="carddetails__body--title mt-3">Learning outcomes</h6>
                                    <div>
                                        
                                        {learningOutcomes && learningOutcomes.map((outcome: string, index:number) => (
                                            <>
                                                <div key={index} className="mb-2">
                                                    <img src="/assets/icons/tick-circle.svg" className="me-2" alt="" />
                                                    <span>{outcome}</span>
                                                </div>
                                            </>
                                            
                                        ))}
                                    </div>
                                    
                                    <h6 className="carddetails__body--title mt-5 mb-3">Ratings and Review</h6>
                                    {
                                        course?.reviews?.map((review: any, index:number) => (
                                            <>
                                                <div className="row align-items-flex" key={index}>
                                                    <div className="col-2" style={{
                                                            backgroundImage: `url(${review.user?.avatar})`,
                                                            width: '50px',
                                                            height: '50px',
                                                            borderRadius: '50px',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: 'cover',
                                                            marginTop: ''
                                                        }} />
                                                    
                                                    <div className="col-10">
                                                        
                                                        <Typography component="legend">{review.user?.name}</Typography>
                                                        <Rating name="read-only" value={review.rating} readOnly/>
                                                        <p>{review.review}</p>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xxl-4" style={{
                            position: 'sticky'
                        }}>
                            <div className="card carddetails__card border-0 px-3 pb-3 mx-3">
                                <h6 className="carddetails__body--title mt-3">Course details</h6>
                                <div className="d-flex align-items-center">
                                    <img src="/assets/learning-hub/inviteAvatar.svg" alt="" />
                                    <h6 className="fw-bold ps-2">{course?.creator?.name}</h6>
                                </div>
                               <div className="py-3">
                                 <button className="signup__col--btn fw-bold">Continue</button>
                               </div>
                               <div className="">
                                <div>Lesson 0</div>
                                <div>Ratings 0</div>
                               </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </>
        )
};

export default CardDetails;