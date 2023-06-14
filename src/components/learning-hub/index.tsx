import React from "react";
import Filters from "./filters";
import LearningHubHeader from "./header";
import Cards from "../reusables/card";

const LearningHub = () => {
    return(
        <>
            <div className="learninghub my-5 py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <LearningHubHeader />
                    </div>
                    <div className="row mt-5" >
                    <div className="col-lg-2">
                            <div className="filters">
                            <Filters /> 
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningHub;