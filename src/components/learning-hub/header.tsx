import React from "react";

const LearningHubHeader = () => {
    return(
        <>
            <div className="col-md-12" style={{
                backgroundImage: 'url(/assets/learning-hub/Head.svg)',
                height: '194px',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
                position: 'relative'
            }} />
            <div className="header__search mx-auto" style={{
                marginTop: '-20px',
                width: '652px',
                backgroundColor: 'white',
                boxShadow: ' 0px 0px 50px rgba(129, 42, 203, 0.08)',
                zIndex: '3',
                height: '70px',
                borderRadius: '10px'
            }}>
                {/* <input type="text" /> */}
            </div>

        </>
    )
}
export default LearningHubHeader