import React from 'react';
import RankCard from './RankCard';

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 19L3 12M3 12L10 5M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>);
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 0.42334C5.04742 0.42334 3.10342 0.534768 1.26399 0.970197L0.686273 1.10734L0.610845 1.69534C0.215187 4.89054 0.0701727 8.1118 0.17713 11.3296C0.293702 14.9879 3.18399 18.3633 6.99999 18.3633C10.8777 18.3633 13.6926 15.0359 13.8194 11.3245C13.8423 10.6879 13.8537 10.0445 13.8537 9.3942C13.8537 6.75934 13.6771 4.07991 13.3908 1.70048L13.3171 1.10048L12.7257 0.966768C10.8606 0.551911 8.96113 0.42334 6.99999 0.42334Z" fill="#93C5FD"/>
    </svg>);

const RankingBoardPage = () => {
    //TODO: 임시데이터. 백엔드로 받아와야하는 코드
    const myRankDAta = { rank: 2, name: '홍길동', streak: 15};

    const overallRankingData = [
        { id: 1, rank: 1, name: '홍길동', streak: 15 },
        { id: 2, rank: 2, name: '홍길동', streak: 15 },
        { id: 3, rank: 3, name: '홍길동', streak: 15 },
    ];

    return (
        <div className="min-h-screen bg-FFF font-sans">
            <header className="flex items-center p-4 bg-white">
             <button><BackArrowIcon /></button>
             <h1 className="flex-grow text-center text-lg font-semibold leading-7 text-black">랭킹 보드</h1>
             <div className="w-6"></div>
            </header>

            <main className="p-4 space-y-8">
                <section>
                    <div className="flex items-center gap-x-3 mb-3">
                        <TrophyIcon />
                        <h2 className='text-lg font-semibold text-black leading-7'>내 랭킹</h2>
                    </div>

                    <RankCard
                        rank={myRankDAta.rank}
                        name={myRankDAta.name}
                        streak={myRankDAta.streak}
                        isHighlighted={true}
                    />
                </section>

                <section>
                    <h2 className='text-lg font-semibold text-black leading-7 mb-3'>전체 랭킹</h2>
                    <div className='space-y-3'>
                        {overallRankingData.map((user)=>
                        <RankCard
                            key={user.id}
                            rank={user.rank}
                            name={user.name}
                            streak={user.streak}
                            isHighlighted={user.rank === myRankDAta.rank}
                            />
                    )}
                    </div>
                </section>
            </main>
            //TODO: 하단 네비게이션 바 컴포넌트 추가 자리
        </div>
    )

}

export default RankingBoardPage;