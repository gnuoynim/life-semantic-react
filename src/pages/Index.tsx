import React, { useEffect } from 'react';
import WebLayout from '@layouts/web/WebLayout';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '@states/userState';

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    setUser({userId:'', name: ''});
    navigate('/main');
  }, []);

  return (
    <React.Fragment>
      <WebLayout>
      </WebLayout>
    </React.Fragment>
  );
};

export default Index;
