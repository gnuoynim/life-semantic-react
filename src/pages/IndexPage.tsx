import React, { useEffect, useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import InputElement from "@components/elements/InputElement";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "@hooks/useAxios";
import { LoginInterface } from "@interfaces/loginInterface";
import useLoginHttp from "@hooks/queries/useLoginQuery";
import $ from "jquery";

const Login = () => {
  const navigate = useNavigate();
  const api = useAxios();
  const loginHttp = useLoginHttp();
  const loginPostMutation = loginHttp.mutation(
    "login-post",
    (data: LoginInterface) => api.post("/users/login", data)
  );
  const [buttonShow, setButtonShow] = useState<boolean>(false);
  const [user, setUser] = useState<LoginInterface>({
    userPass: "",
    userID: "",
  });

  const handleLogin = () => {
    loginPostMutation.mutate(user);
    // if (loginPostMutation.status === 'success')
    navigate("/programList");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      $(".loginBtn").trigger("click");
    }
  };

  useEffect(() => {
    let submitButtonShow = false;
    if (user.userID !== "" && user.userPass !== "") submitButtonShow = true;
    setButtonShow(submitButtonShow);
  }, [user]);

  return (
    <WebLayout>
      <div className="Login">
        <span className="Logo">
          <img src="/images/logo.svg" alt="logo" />
        </span>
        <div className="Header">
          <h2>로그인</h2>
        </div>
        <div className="Container loginInput">
          <InputElement
            type="text"
            placeholder="아이디 입력"
            name={"userID"}
            maxLength="20"
            value={user.userID}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <InputElement
            type="text"
            placeholder="비밀번호 입력"
            name={"userPass"}
            maxLength="30"
            value={user.userPass}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <span className="LoginCheck">
            <InputElement type="checkbox" />
            <label>자동 로그인</label>
          </span>
          {buttonShow && (
            <button type="button" className="loginBtn" onClick={handleLogin}>
              로그인(초록버튼)
            </button>
          )}
          {!buttonShow && (
            <button type="button" className="loginBtn">
              로그인(회색버튼)
            </button>
          )}
          <div className="BtnBox">
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
