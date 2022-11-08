import React,{useState} from 'react';
import {useRef} from 'react';
import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';



const  DateComponent= () => {

    const today = new Date();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();
    const handleChagne=(event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        
    }
    return (
        <React.Fragment>
            <div className='date'>
                <button type='button' onClick={handleChagne}> </button>
                <span className='today'>{todayMonth+1}월{todayDate}일</span>
                <button type='button'>  </button>
            </div>
        </React.Fragment>
      );
};

export default DateComponent;
