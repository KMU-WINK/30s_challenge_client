import React from 'react';
import Avatar from './Avatar';

const TrendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80789 4.05644C9.91678 3.65679 10.329 3.42109 10.7287 3.52999L13.8435 4.37871C14.2408 4.48696 14.4765 4.89523 14.3716 5.29339L13.5492 8.41531C13.4437 8.81586 13.0334 9.05503 12.6329 8.94951C12.2324 8.84399 11.9932 8.43374 12.0987 8.03319L12.4363 6.75169C11.1124 7.66149 9.9076 8.68742 8.82741 9.80784C8.6877 9.95275 8.49561 10.0354 8.29433 10.0373C8.09305 10.0391 7.89947 9.95996 7.75714 9.81762L6 8.06048L2.28033 11.7802C1.98744 12.073 1.51256 12.073 1.21967 11.7802C0.926777 11.4873 0.926777 11.0124 1.21967 10.7195L5.46967 6.46949C5.76256 6.1766 6.23744 6.1766 6.53033 6.46949L8.28597 8.22513C9.35156 7.18563 10.5223 6.23004 11.7936 5.37483L10.3343 4.97723C9.93469 4.86833 9.69899 4.45608 9.80789 4.05644Z" fill="#525252"/>
    </svg> ) ;
 
interface RankCardProps {
    rank: number;
    name: string;
    streak: number;
    isHighlighted?: boolean;
}

const RankCard: React.FC<RankCardProps> = ({ rank, name, streak, isHighlighted = false}) => {
    const rankTextColor = isHighlighted? ' text-93C5FD' : 'text-525252';
    
    return (
       <div className="flex w-[326px] items-center justify-center gap-4 rounded-lg border-[0.5px] border-[#93C5FD] bg-slate-100 py-2 px-4">

             <div className="flex items-center gap-x-4">
                 <span className={`text-lg font-bold w-6 text-center ${rankTextColor}`}>
                     {rank}
                  </span>
                  <Avatar name={name} />
             </div>

              <div className="flex items-center gap-x-2">
                 <span className="text-sm text-gray-600">{streak}일 연속</span>
                <TrendIcon />
            </div>
        </div>
       
    );
};

export default RankCard;