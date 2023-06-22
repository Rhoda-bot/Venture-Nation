import React, { useState } from "react";
import resource_filters from '../../utility/resourceFilter.json'

const Filter =  () => {
    const [checkboxItems, setCheckboxItems] = useState<string[]>([]);

    const handleResourceChange = (value: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkBoxName = event.target.value;
        const boxChecked = event.target.checked;
        setCheckboxItems((prevCheckboxItems) => {
            console.log(prevCheckboxItems);
            
            if (boxChecked) {
                return [...prevCheckboxItems, checkBoxName];
              } else {
                return prevCheckboxItems.filter((item) => item !== checkBoxName);
              }        
        })
    } 
    return(
        <>  <div className="col-lg-2 my-2 px-3  my-lg-3">

            <div className="d-flex border-bottom align-items-center">
                <span className="mb-2 filters--header">Filter</span>
                <span className="ms-auto mb-2" role="button">clear all</span>
            </div>
            <div>
            {
                resource_filters.map(({id, name}):any => (

                     <div className="form-check shadow-none" key={id}>
                        <input className="form-check-input shadow-none" type="checkbox"
                                     value={name} id="defaultCheck1"
                                     checked={checkboxItems.includes(name)}
                                     onChange={handleResourceChange(name)}
                                      />
                            <label className="form-check-label shadow-none" htmlFor="defaultCheck1">
                                {name}
                         </label>
                    </div> 
                ))
            }
            </div>
        </div>
        </>
    )
}
export default Filter