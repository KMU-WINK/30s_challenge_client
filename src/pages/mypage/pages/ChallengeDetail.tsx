import React from 'react';
import InputBox from '../components/InputBox.tsx';
import Avatar from '../../../components/ui/Avatar.tsx';

const MyProfile: React.FC = () => {
  const participants = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '홍길동' },
    { id: 3, name: '김철수' },
    { id: 4, name: '김철수' },
    { id: 5, name: '김철수' },
    { id: 6, name: '김철수' },
  ];
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-3 shadow-md">
        <div className="text-lg font-semibold leading-7 text-black">
          챌린지 상세
        </div>
        <InputBox />
      </div>

      <div className="inline-flex flex-col items-start justify-start gap-5 self-stretch rounded-lg bg-white p-3 shadow-md">
        {/* 섹션 제목 */}
        <div className="text-lg font-semibold leading-7 text-black">
          참여자 상세
        </div>

        {/* 참여자 목록을 담는 컨테이너 */}
        <div className="grid grid-cols-2 gap-4 self-stretch">
          {participants.map((participant) => (
            <div key={participant.id}>
              <Avatar name={participant.name} size="small" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
