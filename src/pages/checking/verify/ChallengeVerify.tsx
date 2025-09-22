import { Icon } from '@iconify/react';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import Button from '../../../components/ui/Button.tsx';
import ImageUploadModal from './components/ImageUploadModal.tsx';

moment.locale('ko');

export default function ChallengeVerify() {
  const [date, setDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [verifiedDates, setVerifiedDates] = useState<Set<string>>(new Set());

  const handleChangeDate = (newDate: Date) => {
    setDate(newDate);
    setActiveDate(newDate);
  };

  const handleConfirmVerify = () => {
    const key = moment(activeDate).format('YYYY-MM-DD');
    setVerifiedDates((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
    setIsOpen(false);
  };

  const goPrevMonth = () =>
    setDate((prev) => moment(prev).subtract(1, 'month').toDate());
  const goNextMonth = () =>
    setDate((prev) => moment(prev).add(1, 'month').toDate());

  const m = moment(date);
  const monthStart = m.clone().startOf('month');
  const monthEnd = m.clone().endOf('month');

  const calendarStart = monthStart.clone().startOf('week');
  const calendarEnd = monthEnd.clone().endOf('week');

  const calendarDays: moment.Moment[] = [];
  const cursor = calendarStart.clone();
  while (cursor.isBefore(calendarEnd) || cursor.isSame(calendarEnd, 'day')) {
    calendarDays.push(cursor.clone());
    cursor.add(1, 'day');
  }

  const weekdayLabels = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <main className="flex min-h-0 w-full flex-1 flex-col items-center gap-7 px-3">
      <section className="flex max-h-[80dvh] min-h-0 w-full flex-col gap-5 overflow-y-auto rounded-lg bg-white p-4 shadow-base">
        <div className="flex items-center gap-3">
          <Icon icon="streamline-plump-color:check-thick" className="h-6 w-6" />
          <span className="text-lg font-semibold">출석체크</span>
        </div>

        <div className="flex items-center justify-between px-2">
          <span className="text-base font-semibold">
            {moment(date).format('YYYY년 MM월')}
          </span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-md p-1 hover:bg-neutral-100"
              onClick={goPrevMonth}
              aria-label="이전 달"
              title="이전 달"
            >
              <Icon
                icon="heroicons:chevron-left"
                className="h-5 w-5 text-secondary"
              />
            </button>
            <button
              type="button"
              className="rounded-md p-1 hover:bg-neutral-100"
              onClick={goNextMonth}
              aria-label="다음 달"
              title="다음 달"
            >
              <Icon
                icon="heroicons:chevron-right"
                className="h-5 w-5 text-secondary"
              />
            </button>
          </div>
        </div>

        <section className="flex flex-col items-center justify-start gap-10">
          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 place-items-center gap-10 self-stretch px-3 py-2">
            {weekdayLabels.map((w, idx) => (
              <div
                key={w}
                className={[
                  'text-center text-sm font-medium',
                  idx === 0 ? 'text-red-500' : '',
                  idx === 6 ? 'text-primary' : '',
                ].join(' ')}
              >
                {w}
              </div>
            ))}
          </div>

          {/* 날짜 그리드 */}
          <div className="grid grid-cols-7 place-items-center gap-10 self-stretch px-3 py-2">
            {calendarDays.map((d) => {
              const key = d.format('YYYY-MM-DD');
              const isToday = d.isSame(moment(), 'day');
              const isActive = d.isSame(activeDate, 'day');
              const isThisMonth = d.isSame(m, 'month');
              const isVerified = verifiedDates.has(key);

              const btnBase =
                'group flex items-center justify-center rounded-full p-0 focus-visible:outline-none';
              const btnTextColor = !isThisMonth
                ? 'text-neutral-200'
                : 'text-neutral-400';
              const pillBase =
                'relative flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold';

              const pill = isVerified ? (
                <div className={`${pillBase} bg-primary text-black`}>
                  {d.date()}
                </div>
              ) : isActive ? (
                <div className={`${pillBase} bg-primary-background`}>
                  <span className="text-secondary">{d.date()}</span>
                </div>
              ) : isToday ? (
                <div
                  className={`${pillBase} group-focus-visible:bg-primary-background ${!isThisMonth ? 'opacity-50' : ''}`}
                >
                  <span
                    className={`text-primary group-focus-visible:text-secondary`}
                  >
                    {d.date()}
                  </span>
                  <div className="absolute -bottom-1 h-0 w-3.5 outline outline-1 outline-offset-[-0.5px] outline-blue-400" />
                </div>
              ) : (
                <div
                  className={`${pillBase} group-focus-visible:bg-primary-background`}
                >
                  <span
                    className={`${btnTextColor} group-focus-visible:text-secondary`}
                  >
                    {d.date()}
                  </span>
                </div>
              );

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleChangeDate(d.toDate())}
                  className={[
                    btnBase,
                    btnTextColor,
                    'transition-colors hover:bg-neutral-50',
                  ].join(' ')}
                  aria-current={isActive ? 'date' : undefined}
                  aria-label={d.format('YYYY-MM-DD')}
                  title={d.format('YYYY년 M월 D일 (ddd)')}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </section>
        <Button
          size="default"
          color="primary"
          className="w-full"
          onClick={() => setIsOpen(true)}
        >
          인증하기
        </Button>

        {isOpen && (
          <ImageUploadModal
            isOpen={true}
            onClose={() => setIsOpen(false)}
            onConfirm={handleConfirmVerify}
          />
        )}
      </section>
    </main>
  );
}
