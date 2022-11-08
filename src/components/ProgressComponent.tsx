import React from 'react';

import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';


const ProgressComponent = ({active}:{active:boolean}) => {
  console.log(active)
  return (
    <React.Fragment>
      <li className={active ? 'active' : ''}></li>
    </React.Fragment>
  );
};

export default ProgressComponent;
