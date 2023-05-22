import React from "react";
import { Fade } from "reactstrap";

const GeneralVenture = () => {
    return(
        <>
            <Fade>
                <div className="general">
                    <div className="container">
                        <div className="row">
                            <div className="general__header py-4 px-5">
                                <h4 className="profile__details--name">General</h4>
                                <p className="profile__details--location">You can keep your venture information and data up-to-date by editing the form fields below.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}
export default GeneralVenture;