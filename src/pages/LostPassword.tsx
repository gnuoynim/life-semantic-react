import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';
import ModalComponent from '@/components/modal/ModalComponent';
import { countState, sampleState } from '@states/sampleState';
import WebLayout from '@layouts/web/WebLayout';
import InputElement from '@components/elements/InputElement';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TitleHeadComponent from '@/components/head/TitleHeadComponent';
const LostPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [userListError, setUserListError] = useState(true);
  const increase = () => setCount(count + 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  return (
    <WebLayout>
      <TitleHeadComponent name='비밀번호 찾기'/>
      <div className='Login'>
        <div className='Temporary'>
          <p>임시 비밀번호 발급</p>
          <label>이름</label>
          <InputElement type="text" placeholder='이름 입력' maxlength='10'/>
          <label>휴대폰 번호</label>
          <InputElement type="number" placeholder='숫자만 입력'/>
          <button className='InnerBtn'>임시 비밀번호 발급</button>
        </div>
        <div className='NewPass'>
          <p>새 비밀번호 설정</p> 
          <label>아이디</label>
          <InputElement type="text" placeholder='아이디 입력'/>
          <label>휴대폰 번호</label>
          <select name='' id=''>
            <option value=''>통신사 선택</option>
            <option value='option1'>option1</option>
            <option value='option2'>option2</option>
            <option value='option3'>option3</option>
            <option value='option4'>option4</option>
          </select>
 
          <span className='CodeCheck'>
            <InputElement type="text" placeholder='휴대폰 번호 입력'/>
            <button type="button" disabled>인증번호 <br/>받기</button>
          </span>
          <InputElement type="number" placeholder='인증번호 입력(10분 안에)'/>
          <label>새 비밀번호 설정</label>
          <InputElement type="text" placeholder='새 비밀번호 입력'/>
          <label>새 비밀번호 확인</label>
          <InputElement type="text" placeholder='새 비밀번호 확인'/>
          <button className='InnerBtn'>비밀번호 변경</button>
        </div>
        
      </div>

    </WebLayout>
  );
};

export default LostPassword;
