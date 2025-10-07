interface RankType {
  rank: string;
  name: string;
  score: string;
  date: Date
}

export const LeaderboardItem = ({ rank, name, score, date }: RankType) => {

  return (
    <div className="bg-card h-20 grow mb-5 rounded-lg p-3">
      <div className="flex h-full">
        <div className="flex self-center items-center justify-center h-12 w-12 rounded-full bg-secondary text-secondary-foreground text-2xl">{rank}</div>
        
        <div className="flex flex-col items-start justify-center ms-5">
          <div className="flex justify-between">
            <p>{name}</p>
            <p className="ms-2 text-muted-foreground text-sm">({score})</p>
          </div>
          <p className="text-[.8rem] text-muted-foreground">{date.getDate() + " / " + date.getMonth() + " / " + date.getFullYear()}</p>
        </div>
        
        

      </div>
      
    </div>
  );
};
