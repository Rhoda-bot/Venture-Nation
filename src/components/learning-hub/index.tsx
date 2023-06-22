import React, { ChangeEvent, useState } from "react";
import Filters from "./filters";
import LearningHubHeader from "./header";
import Cards from "../reusables/card";

const LearningHub = () => {
    const [searchField, setSearchField] = useState<any>("");
    const handleSearchField = (event: ChangeEvent<HTMLInputElement>) => {
    
        setSearchField(event.target.value);
    }
console.log(searchField);

    return(
        <>
            <div className="learninghub my-5 py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <LearningHubHeader handleSearch={handleSearchField} search={searchField}/>
                    </div>
                    <div className="row mt-5" >
                        <Cards search={searchField}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LearningHub;