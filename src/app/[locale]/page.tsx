'use client';

import { FC } from 'react';
// import SplineTool from '@splinetool/react-spline';
// import styled from 'styled-components';
import dynamic from 'next/dynamic';
// import { useLocale } from 'next-intl';

import { InstallPrompt } from '@features/install-prompt';
import {
  Loader,
  // ScrollDown
} from '@shared/ui';
// import { useThemeStore } from '@widgets/header';
// import { Locale } from '@locales';
import { PushNotifications } from '@widgets/push-notifications';
import { useAdditionalLogic } from './lib';
import { Wrapper } from './page.styled';

// const Wrapperr = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 55%;
//   height: 55%;
//   margin-left: -45%;
//   margin-bottom: 150px;
// `;
// const Wrapperrr = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;

//   &&& > div:nth-child(3) {
//     margin-bottom: 150px;
//   }
// `;

const Background = dynamic(() => import('@widgets/background'), {
  loading: () => <Loader />,
  ssr: false,
});
// const FirstSection = dynamic(() => import('@widgets/first-section'), {
//   loading: () => <Loader />,
//   ssr: false,
// });
// const TypedText = dynamic(() => import('@widgets/typed-text'), {
//   loading: () => <Loader />,
//   ssr: false,
// });

const Home: FC = () => {
  const { onMouseMoveHandler } = useAdditionalLogic();
  // const locale = useLocale() as Locale;
  // const { themeType } = useThemeStore();
  // const isDarkTheme = themeType === 'dark';

  return (
    <Wrapper onMouseMove={ onMouseMoveHandler }>
      <PushNotifications />
      <InstallPrompt />
      <Background />
      {/* <FirstSection />
      <Wrapperrr>
        <Wrapperr>
          <SplineTool
            scene={ `https://prod.spline.design/${isDarkTheme ? 'KitYQfe9ltuZFkAn' : 'Ti0aboptSyKIONzY'}/scene.splinecode` }
          />
        </Wrapperr>
        <TypedText />
      </Wrapperrr>
      <Wrapperrr>
        <SplineTool
          scene={ `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'xgiHCRtcVsbjIgGM' : 'JT-BdgY5mt5q4jxh') : locale === 'ru' ? 'f0QfGcXtdk7PMVgF' : 'MGz6m6545xGiYPY5'}/scene.splinecode` }
        />
        <ScrollDown/>
      </Wrapperrr> */}
    </Wrapper>
  );
};

export default Home;
