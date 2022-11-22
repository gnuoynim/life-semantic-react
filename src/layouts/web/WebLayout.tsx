import { sampleState } from '@states/sampleState';
import React, { useEffect } from 'react';

import BaseLayout from '@layouts/BaseLayout';
import { useRecoilState } from 'recoil';

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  const [sample, setSample] = useRecoilState(sampleState);

  useEffect(() => {
    if (sample.title) document.title = sample.title;
  }, [sample.title]);

  return (
    <BaseLayout>
      {children}
    </BaseLayout>
      // 페이지1, 2
      //TODO:
  );
};

export default WebLayout;
