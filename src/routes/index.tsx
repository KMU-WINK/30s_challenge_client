import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import ChallengeSuccess from '../pages/challenge/success/ChallengeSuccess';
import ChallengeCreate from '../pages/challenge/create/ChallengeCreate';
import ChallengeSelect from '../pages/checking/select/ChallengeSelect';
import ChallengeVerify from '../pages/checking/verify/ChallengeVerify';
import LoginPage from '../pages/login/pages/Login';
import Signup from '../pages/login/pages/Signup';
import MyPage from '../pages/mypage/pages/MyPage';
import MyProfile from '../pages/mypage/pages/MyProfile';
import ChallengeDetail from '../pages/mypage/pages/ChallengeDetail';
import { getChallengeList } from '../api/challenge';
import { getMyInfo } from '../api/user';
import Ranking from '../pages/ranking/Ranking.tsx';

async function meLoader() {
  return await getMyInfo();
}

async function myWithChallengesLoader() {
  const [me, challenges] = await Promise.all([getMyInfo(), getChallengeList()]);
  return { me, challenges };
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
        handle: { hideTopBar: true, hideFooter: true },
      },
      {
        path: '/',
        element: <Home />,
        handle: { topBarTitle: null },
        loader: myWithChallengesLoader,
      },
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
        element: <ChallengeSelect />,
        loader: myWithChallengesLoader,
        handle: { topBarTitle: '챌린지 선택' },
      },
      {
        path: '/checking/:id/verify',
        element: <ChallengeVerify />,
        handle: { topBarTitle: '챌린지 인증' },
        loader: async ({ params }) => {
          if (import.meta.env.DEV) {
            return {
              id: params.id,
              name: '러닝하기',
              icon: 'run',
              startAt: '2025-09-01',
              endAt: '2025-09-30',
            };
          }
          const res = await fetch(`/api/challenges/${params.id}`, {
            headers: { Accept: 'application/json' },
          });
          if (!res.ok)
            throw new Response('Failed to load', { status: res.status });
          return res.json();
        },
      },
      {
        path: '/ranking',
        element: <Ranking />,
        handle: { topBarTitle: '랭킹보드' },
      },
      {
        path: 'my',
        element: <MyPage />,
        loader: meLoader,
        handle: { topBarTitle: '마이 페이지' },
      },
      {
        path: '/my/profile',
        element: <MyProfile />,
        loader: meLoader,
        handle: { topBarTitle: '내 정보 관리' },
      },
      {
        path: '/my/:id/detail',
        element: <ChallengeDetail />,
        handle: { topBarTitle: '챌린지 상세 조회' },
      },
      {
        path: '/login/signup',
        element: <Signup />,
        handle: { topBarTitle: '회원가입', hideFooter: true },
      },
    ],
  },
]);
