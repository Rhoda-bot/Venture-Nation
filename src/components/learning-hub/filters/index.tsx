import React from "react";

const Filters = () =>{
    return(
        <>
             <div className="filters py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 col-xxl-2 p-3">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="p-2 text-start">
                        <div className="accordion-item ">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>Media type</b>
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="form-check shadow-none">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label shadow-none" htmlFor="defaultCheck1">
                                     Videos
                                 </label>
                                </div>
                                <div className="form-check shadow-none">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label shadow-none" htmlFor="defaultCheck1">
                                     Audio
                                 </label>
                                </div>
                                <div className="form-check shadow-none">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label shadow-none" htmlFor="defaultCheck1">
                                     Text based
                                 </label>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  <div className="p-2 text-start">
                  <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <b>Price</b>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                     <div className="form-check shadow-none">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                     Paid
                                 </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                     Free
                                 </label>
                        </div>
                  </div>
                </div>
              </div>
              </div>
                <div className="p-2">
                <div className="accordion-item text-start" >
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <b>Topics</b>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Nothing yet
                    </div>
                  </div>
                </div>
                </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Filters