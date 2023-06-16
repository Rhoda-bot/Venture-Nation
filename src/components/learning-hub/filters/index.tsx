import React from "react";

const Filters = () =>{
    return(
        <>
   
                      <div className="d-flex border-bottom align-items-center">
                        <span className="mb-2 filters--header">Filter</span>
                        <span className="ms-auto mb-2" role="button">clear all</span>
                      </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="pt-3 text-start">
                        <div className="accordion-item ">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse"
                             data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                             <span className="me-auto filters--text">Media type</span>
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
                  <div className="pt-2 text-start">
                  <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <i className="fa fa-tag me-1"/>  <span>Price</span>
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
                <div className="pt-2">
                <div className="accordion-item text-start" >
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button rounded collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <span>Topics</span>
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
        </>
    )
}
export default Filters