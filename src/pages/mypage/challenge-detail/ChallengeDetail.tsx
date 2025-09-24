import { useLoaderData } from 'react-router-dom';
import Avatar from '../../../components/ui/Avatar.tsx';
import Badge from '../../../components/ui/Badge.tsx';
import ChallengeIcon from '../../../components/ui/ChallengeIcon.tsx';
import type { ChallengeResponse } from '../../../types/api/challenge.ts';
import type { Status } from '../my-page/components/MyChallenge.tsx';

type Participant = { id: string; name: string };

type ChallengeDetailProps = ChallengeResponse & {
  status: Status;
};

interface ChallengeDetailResponse {
  challenge: ChallengeDetailProps | null;
  participants: Participant[];
}

export default function ChallengeDetail() {
  const data = useLoaderData<ChallengeDetailResponse>();

  const challenge = data?.challenge ?? null;

  const participants: Participant[] =
    data?.participants ??
    (import.meta.env.DEV
      ? [
          { id: '1', name: '홍길동' },
          { id: '2', name: '홍길동' },
          { id: '3', name: '홍길동' },
          { id: '4', name: '홍길동' },
        ]
      : []);

  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center gap-6 px-6">
      <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
        <span className="text-lg font-semibold">챌린지 상세</span>

        <div className="flex flex-col items-start justify-start gap-5 p-4">
          <div className="flex items-center justify-start gap-4">
            <ChallengeIcon
              label={challenge?.icon ?? 'question'}
              size="default"
              bgColor="bg-primary-background"
              iconColor="text-primary"
            />
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="flex items-start justify-start gap-4">
                <span className="text-base font-semibold">챌린지 이름</span>
                {challenge?.status && <Badge status={challenge.status} />}
              </div>
              <div className="text-base font-medium text-neutral-500">
                {challenge?.name ?? '—'}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-1">
            <span className="text-base font-semibold">챌린지 설명</span>
            <div className="text-base font-medium text-neutral-500">
              {challenge?.description ?? '—'}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-1">
            <span className="text-base font-semibold">챌린지 기간</span>
            <div className="text-base font-medium text-neutral-500">
              {(challenge?.startedAt ?? '—') +
                ' ~ ' +
                (challenge?.endedAt ?? '—')}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-1">
            <span className="text-base font-semibold">참여자 수</span>
            <div className="text-base font-medium text-neutral-500">
              {(challenge?.limits ?? 0) + ' 명'}
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-0 w-full flex-1 flex-col gap-5 rounded-lg bg-white p-4 shadow-base">
        <div className="text-lg font-semibold">참여자 상세</div>

        <div className="grid grid-cols-2 gap-4">
          {participants.map((p) => (
            <Avatar key={p.id} id={p.id} name={p.name} size="small" />
          ))}
        </div>
      </section>
    </main>
  );
}
