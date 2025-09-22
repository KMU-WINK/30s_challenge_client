export type ChallengeIconLabel =
  | 'run'
  | 'bed'
  | 'coding'
  | 'study'
  | 'exercise'
  | 'question';

export const CHALLENGE_ICONS: Record<ChallengeIconLabel, string> = {
  run: 'healthicons:exercise-running',
  bed: 'ion:bed',
  coding: 'material-symbols:code-rounded',
  study: 'mingcute:pencil-fill',
  exercise: 'mdi:weight-lifter',
  question: 'heroicons-outline:question-mark-circle',
} as const;
