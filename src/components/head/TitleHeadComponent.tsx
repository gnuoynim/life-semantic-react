import React from 'react';
import {useNavigate} from 'react-router-dom';

const TitleHeadComponent = ({name}: { name: string }) => {

    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className='HeaderFix'>
                <button type='button' onClick={() => navigate(-1)}>
                    <img src='images/arrow.svg'></img>
                </button>
                <h2>{name}</h2>
            </div>
            <div className='headerSpace'></div>
        </React.Fragment>
    )
};

export default TitleHeadComponent
;
