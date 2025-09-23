import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button.tsx';
import InfoBox from './components/InfoBox.tsx';
import { createChallenge } from '../../../api/challenges.ts';
import type { ChallengeIconLabel } from '../../../types/shared/icons.ts';

const ChallengeCreate: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // 모든 폼 필드의 상태를 여기서 관리합니다.
  const [challengeName, setChallengeName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [chosenIcon, setChosenIcon] = useState<ChallengeIconLabel | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [personCount, setPersonCount] = useState<number | null>(null);

  const handleCreateChallenge = async () => {
    // 필수 필드 유효성 검사
    if (
      !challengeName ||
      !startDate ||
      !endDate ||
      !personCount ||
      !chosenIcon
    ) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    setLoading(true);

    const challengeData = {
      //프론트 변수명을 백엔드 변수명으로 반환
      name: challengeName,
      description: description,
      icon: chosenIcon,
      startedAt: startDate.toISOString().split('T')[0], // 'YYYY-MM-DD' 형식으로 변환
      endedAt: endDate.toISOString().split('T')[0], // 'YYYY-MM-DD' 형식으로 변환
      limits: personCount,
    };

    try {
      await createChallenge(challengeData);
      alert('챌린지가 성공적으로 개설되었습니다!');
      navigate('/challenge/success');
    } catch (error) {
      console.error(error);
      alert('챌린지 개설에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 self-stretch px-6">
      <InfoBox
        challengeName={challengeName}
        setChallengeName={setChallengeName}
        description={description}
        setDescription={setDescription}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        chosenIcon={chosenIcon}
        setChosenIcon={setChosenIcon}
        personCount={personCount}
        setPersonCount={setPersonCount}
      />
      <div className="self-stretch">
        <Button
          onClick={handleCreateChallenge}
          size="default"
          color="primary"
          className="w-full"
          disabled={loading}
        >
          {loading ? '개설 중...' : '챌린지 개설하기'}
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCreate;
