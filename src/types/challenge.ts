import type { ChallengeIconLabel } from '../components/ui/ChallengeIcon.tsx';

type LocalDate = `${number}.${number}.${number}`;

export type Challenge = {
  id: number;
  name: string;
  icon: ChallengeIconLabel;
  startAt: LocalDate;
  endAt: LocalDate;
};
