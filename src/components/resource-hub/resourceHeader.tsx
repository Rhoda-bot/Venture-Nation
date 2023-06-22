import React from 'react';

const ResourceHeader = () => {
    return(
        <>
            <div className="resource__header align-items-center text-center">
                <div className="mb-2 py-5">
                    <h4 className=" text-center text-dark">Discover. Learn. Succeed</h4>
                    <p>Take your pick from our wide variety of resources to aid your venture’s growth.</p>
                </div>
            <div className="resource__search d-flex mx-auto py-2">
                <input type="text" className='resource__search--input'/>
                <button className="header__search--btn px-4 mx-2">Search</button>
            </div>
            </div>

        </>
    )
}
export default ResourceHeader;