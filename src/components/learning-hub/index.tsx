import React from "react";
import Filters from "./filters";
import LearningHubHeader from "./header";

const LearningHub = () => {
    return(
        <>
            <div className="learninghub my-5 py-5">
                <div className="container">
                    <div className="row">
                        <LearningHubHeader />
                        <Filters />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningHub;