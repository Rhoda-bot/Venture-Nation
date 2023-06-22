 import React from "react";
import ResourceHeader from "./resourceHeader";
import Filter from "./filter";
const ResourceHub = () =>{
    return(
        <>
           <div className="resource py-5 mt-4 ">
            <div className="container">
                <div className="row ">
                    <ResourceHeader />
                </div>
                <div className="row">
                    <Filter />
                </div>
            </div>
           </div>
        </>
    )
}
export default ResourceHub;