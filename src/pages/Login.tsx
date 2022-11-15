import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from 'recoil';
import { countState, sampleState } from '@states/sampleState';
import WebLayout from '@layouts/web/WebLayout';
import InputElement from '@components/elements/InputElement';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [userListError, setUserListError] = useState(true);
  const increase = () => setCount(count + 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const btnActive = document.querySelectorAll('.loginBtn');
  }

  return (
    <WebLayout>
      <div className='Login' >
        <span className='Logo'>
          <img src="/images/logo.svg" alt="logo"/>
        </span>
        <div className='Header'>
          <h2>로그인</h2>
        </div>
        <div className='container loginInput'>
          <InputElement type="text" placeholder='아이디 입력' maxlength='20'/>
          <InputElement type="text" placeholder='비밀번호 입력' maxlength='30'/>         
          <span className='LoginCheck'>
            <InputElement type="checkbox" />
            <label>자동 로그인</label>
          </span>
          <button type='submit' className='loginBtn' onClick={handleClick}>로그인</button>
          <div className='BtnBox'>
            <Link to="/login">회원가입</Link>
            <Link to="/id">아이디 찾기</Link>
            <Link to="/password">비밀번호 찾기</Link>
          </div>
        </div>

      </div>
    </WebLayout>
  );
};

export default Login;
