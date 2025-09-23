import { useLoaderData } from 'react-router-dom';
import type { SimpleUserResponse } from '../../types/api/user.ts';
import Myrank from './container/Myrank.tsx';
import Allrank from './container/Allrank.tsx';

export default function Ranking() {
  useLoaderData() as SimpleUserResponse;
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <Myrank />
      <Allrank />
    </div>
  );
}
