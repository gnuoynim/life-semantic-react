import React from 'react';

import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';


const CircleComponent = ({step, active}:{step: string, active:boolean}) => {
  console.log(active)
  return (
    <React.Fragment>
      <li className={active ? 'active' : ''}>{step}</li>
    </React.Fragment>
  );
};

export default CircleComponent;
