import { useLoaderData } from 'react-router-dom';
import type { SimpleUserResponse } from '../../types/api/user.ts';
import MyRank from './container/MyRank.tsx';
import AllRank from './container/AllRank.tsx';

export default function Ranking() {
  const me = useLoaderData() as SimpleUserResponse;

  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <MyRank me={me} />
      <AllRank me={me} />
    </div>
  );
}
