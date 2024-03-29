import React, { useEffect, useState } from 'react';
import WebLayout from '@layouts/web/WebLayout';
import InputElement from '@components/elements/InputElement';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '@hooks/useAxios';
import { LoginInterface } from '@interfaces/loginInterface';
import $ from 'jquery';
import ModalComponent from '@components/modal/ModalComponent';
import { useRecoilState } from 'recoil';
import { modalState } from '@states/modalState';
import { userState } from '@states/userState';

const Login = () => {
  const navigate = useNavigate();
  const api = useAxios();
  const [buttonShow, setButtonShow] = useState<boolean>(false);
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);
  const [loginParam, setLoginParam] = useState<LoginInterface>({
    userPass: '',
    userID: ''
  });

  const handleLogin = () => {
    api
        .post('/users/login', user)
        .then((res) => {
          if (res.data.result === 'success') {
            setUser({userId: 'test', name: '김풀숲', accessToken: 'sdf8sjdfk1klaksdj18x8ds'})
            navigate('/main');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setLoginParam({ ...loginParam, [name]: value });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      $('.loginBtn').trigger('click');
    }
  };

  const handleLoginCheck = () => {
    setModal({
      ...modal,
      show: true,
      title: '안내',
      cancelShow: false,
      content: (
          <div>
            아이디 또는 비밀번호를
            <br /> 다시 확인해 주세요.
          </div>
      ),
      confirmText: '확인'
    });
  };

  useEffect(() => {
    let submitButtonShow = false;
    if (loginParam.userID !== '' && loginParam.userPass !== '') submitButtonShow = true;
    setButtonShow(submitButtonShow);
  }, [loginParam]);

  return (
      <React.Fragment>
        <WebLayout>
          <div className="Login">
          <span className="Logo">
            <img src="/images/logo.svg" alt="logo" />
            <img src="/images/logo02.png" alt="logo" />
          </span>
            <div className="Header">
              <h2>로그인</h2>
            </div>
            <div className="Container loginInput">
              <InputElement
                  type="text"
                  placeholder="아이디 입력"
                  name={'userID'}
                  maxLength="20"
                  value={loginParam.userID}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
              />
              <InputElement
                  type="password"
                  placeholder="비밀번호 입력"
                  name={'userPass'}
                  maxLength="30"
                  value={loginParam.userPass}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
              />
              <span className="LoginCheck">
              <InputElement type="checkbox" id="login"/>
              <label htmlFor='login'>자동 로그인</label>
            </span>
              {buttonShow && (
                  <button
                      type="button"
                      className="loginBtn active"
                      onClick={handleLogin}
                  >
                    로그인
                  </button>
              )}
              {!buttonShow && (
                  <button
                      type="button"
                      className="loginBtn"
                      onClick={handleLoginCheck}
                  >
                    로그인
                  </button>
              )}
              <div className="BtnBox">
                <Link to="/join">회원가입</Link>
                <Link to="/lostId">아이디 찾기</Link>
                <Link to="/password">비밀번호 찾기</Link>
              </div>
            </div>
          </div>
        </WebLayout>
        <ModalComponent />
      </React.Fragment>
  );
};

export default Login;
