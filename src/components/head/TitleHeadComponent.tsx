import React from 'react';
import InputElement from '../elements/InputElement';

import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TitleHeadComponent= ({name}:{name:string}) => {


  return (
    <React.Fragment>
        <div className='HeaderFix' >
          <button type='button'>
            <img src='images/arrow.svg'></img>
          </button>
          <h2>{name}</h2> 
        </div> 
        <div className='headerSpace'></div>
    </React.Fragment>
  );
};

export default TitleHeadComponent
;
