import { useLoaderData } from 'react-router-dom';
import ProfileCard from './components/ProfileCard.tsx';
import MyChallenge from './components/MyChallenge.tsx';
import type { UserResponse } from '../../../types/api/user.ts';

export default function MyPage() {
  const me = useLoaderData() as UserResponse;

  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <ProfileCard id={me.id} name={me.name} />
      <MyChallenge />
    </div>
  );
}
