import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout.tsx';
import ChallengeSuccess from '../pages/home/pages/ChallengeSuccess.tsx';
import ChallengeCreate from '../pages/home/pages/ChallengeCreate.tsx';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <div>홈 화면</div>, handle: { topBarTitle: null } },
      {
        path: '/challenge-create/challenge-success',
        element: <ChallengeSuccess />,
        handle: { hideTopBar: true, hideFooter: true },
      },
      {
        path: '/challenge-create',
        element: <ChallengeCreate />,
        handle: { topBarTitle: null },
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
