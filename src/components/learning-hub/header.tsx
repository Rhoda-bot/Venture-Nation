import React from "react";

const LearningHubHeader = () => {
    return(
        <>
            <div className="header align-items-center justify-content-center">
                <h4 className=" header--text text-center my-5">Discover courses for startup founders and businesses</h4>
            </div>
            <div className="header__search d-flex py-2">
                <input type="text" className="header__search--input shadow-none" placeholder="Search Courses..." />
                <button className="header__search--btn px-4">Search</button>
            </div>
        </>
    )
}
export default LearningHubHeader