import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout.tsx';
import Home from '../pages/home/Home.tsx';
import ChallengeSuccess from '../pages/challenge/success/ChallengeSuccess.tsx';
import ChallengeCreate from '../pages/challenge/create/ChallengeCreate.tsx';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home />, handle: { topBarTitle: null } },
      {
        path: '/challenge/join',
        element: <ChallengeCreate />,
        handle: { topBarTitle: '챌린지 개설하기' },
      },
      {
        path: '/challenge/success',
        element: <ChallengeSuccess />,
        handle: { hideTopBar: true, hideFooter: true },
      },
      {
        path: '/checking',
        element: <div>출석체크 화면</div>,
        handle: { topBarTitle: '챌린지 선택' },
      },
      {
        path: '/checking/:challengeId',
        element: <div>출석체크 화면</div>,
        handle: { topBarTitle: '챌린지 인증' },
      },
      {
        path: '/ranking',
        element: <div>랭킹보드 화면</div>,
        handle: { topBarTitle: '랭킹보드' },
      },
      {
        path: 'my',
        element: <div>마이페이지</div>,
        handle: { topBarTitle: '마이 페이지' },
      },
      {
        path: 'my/:userId',
        element: <div>마이페이지</div>,
        handle: { topBarTitle: '내 정보 관리' },
      },
    ],
  },
]);
