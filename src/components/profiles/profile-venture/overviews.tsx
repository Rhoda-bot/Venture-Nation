import React from "react";

const Overviews = () => {
    return(
        <>
            <div className="row text-start">
                <div className="col-md-4">
                    <div className="card p-2">
                        <img src="/assets/icons/icon-1.png" width={35} alt="" />
                        <span>Sectors</span>
                        <h4>E-learning, EdTech</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-2">
                        <img src="/assets/icons/icon-1.png" width={35} alt="" />
                        <span>Audience location</span>
                        <h4>Africa</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-2">
                        <img src="/assets/icons/icon-2.png" width={35} alt="" />
                        <span>Customer model</span>
                        <h4>B2B, B2B2B</h4>
                    </div>
                </div>
                <h5 className="mb-2 mt-2">Full description</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Integer consequat 
                    lacus laoreet eget. Massa id pellentesque dolor sed facilisi posuere.
                     Ac eget consectetur tellus faucibus. Nibh egestas etiam eu nulla ut orci.
                      Nec sem habitant in sit ipsum sit arcu sed. Amet imperdiet turpis nisl ut tincidunt.
                       Orci vitae vitae 
                    urna sit blandit. Sed egestas non ut odio ut nunc. Amet in mauris senectus purus quis enim urna.</p>
            </div>
        </>
    )
}
export default Overviews;