import React, { useEffect, useState } from "react";
import { getRequest } from "../../utility/apiRequest";

const Cards = () => {
    const [courses, setCourses] = useState<any>([]);
    useEffect(() =>{
        const getCourses = async() => {
                const courses = await getRequest('courses');
            setCourses(courses.data.data);
            
        }
        getCourses();
    }, [])
    console.log(courses);
    
    
    return (
           <>
              <div className="row">
                {
                courses.map((course:any) => (
                 <div className="col-md-6 col-lg-4 col-xxl-3 my-3 px-3"  key={course.id}>
                        <div className="card cards__card border-0 p-2 h-100">
                        <div className=""  style={{
                            backgroundImage: `url(${course.image})`,
                            height: '150px',
                            width: '100%',
                            borderRadius: '10px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
        
                        }}/>
                        <div className="card-body">
                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text cards__bottom--text">{course.creator.name}</p>
                            <div className="d-flex">
                                <p>
                                    <i className="fa fa-book-open cards__bottom--heart"/> <span>0 Lesson</span>
                                </p>
                                <p className="ms-auto">
                                    <i className="fa fa-clock-o cards__bottom--heart me-1"/>
                                    <span>{course.duration} Hours</span>
                                </p>
                            </div>
                            <div className="d-flex">
                                {
                                    (course.salePrice === 0 && course.price === 0) &&  <>
                                        <span className="cards__bottom--price me-2">Free</span>
                                        <i className="fa fa-heart ms-auto cards__bottom--heart mt-2"/>
                                    </>
                                  
                                }
                                 {
                                    (course.salePrice > 0 && course.price > 0) &&  <>
                                        <span className="cards__bottom--price me-2">{course.salePrice}</span>
                                        <span className="cards__bottom--discount mt-1">{course.price}</span>
                                        <i className="fa fa-heart ms-auto cards__bottom--heart mt-2"/>
                                    </>
                                  
                                }
                               
                            </div>
                        </div>
                    </div>
                 </div>
                ))
              }
                </div>
           </>
        )
}

export default Cards;