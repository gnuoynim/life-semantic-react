import React from 'react';
import ProgramNumberDetailComponent from './ProgramNumberDetailComponent';
import RoundComponent from './RoundComponent';
import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';


const ProgramNumberComponent = () => {

  return (
    <React.Fragment>
      <div className=''>
        <h3 className='programRound'>프로그램 회차별 정보</h3>
        <div className='roundBox'>
          <RoundComponent/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProgramNumberComponent;
