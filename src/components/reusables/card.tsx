import React, { useContext, useEffect, useState } from "react";
import { getRequest } from "../../utility/apiRequest";
import { NavLink } from "react-router-dom";
import { CourseContext } from "../../context/userContext";
import Filters from "../learning-hub/filters";

const Cards = ({search}:any) => {
    const {courses, setCourses}: any = useContext<any>(CourseContext);
    console.log(search);
    
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectItem = (itemName: string, isChecked: boolean) => {
      if (isChecked) {
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemName]);
      } else {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((item) => item !== itemName)
        );
      }
    };
   

    
    useEffect(() => {
        const  getCourses = async () => {
          // try {
            const courses = await getRequest('courses');
            if (courses.data.status === "success") {
              return courses.data.data;
            }else {
              console.log(courses);
            }
        };
      
        getCourses().then((userData) => {
          if (userData) {
            setCourses(userData);
          }
        });
      }, [])
    // console.log(courses);
    
    
    return (
           <>
            <div className="col-lg-2 my-2 px-3  my-lg-3">
              <div className="filters">
                <Filters onSelectedMediaType={handleSelectItem}/> 
              </div>
            </div>
          <div className="col-10">
          <div className="row">
                {
                courses.filter((courses:any) => selectedItems?.length=== 0 ? courses : selectedItems.includes(courses.mediaType))
                .filter((courses:any) => search.length===0? courses :courses.title.toLowerCase().includes(search.toLowerCase()))
                .map((course:any) => (
                 <div className="col-md-6 col-lg-4 col-xxl-3 my-3 px-3 "  key={course.id}>
                    <NavLink to={`/learning-hub/${course.slug}`}>
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
                            <h5 className="card-title text-dark">{course.title}</h5>
                            <p className="card-text cards__bottom--text">{course.creator.name}</p>
                            <div className="d-flex">
                                <p className="text-dark">
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
                    </NavLink>
                 </div>
                ))
              }
                </div>
          </div>
           </>
        )
}

export default Cards;