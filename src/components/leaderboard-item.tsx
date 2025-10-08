import Image from "next/image";

interface RankType {
  rank: string;
  name: string;
  score: string;
  date: Date;
  img: string;
}

export const LeaderboardItem = ({ name, score, date, img }: RankType) => {
  return (
    <div className="bg-card h-20 min-w-50 grow mb-5 rounded-lg p-3">
      <div className="flex h-full">
        <Image
          width={54}
          height={54}
          src={img + `?username=[${name}]`}
          alt="profile image"
          className="flex self-center items-center justify-center rounded-full bg-background text-secondary-foreground text-2xl me-4"
        ></Image>

        <div className="flex flex-col items-start justify-center">
          <div className="flex justify-between flex-wrap items-center">
            <p className="me-2">{name}</p>
            <p className="text-sm text-muted-foreground">
              {date.getDate() +
                " / " +
                date.getMonth() +
                " / " +
                date.getFullYear()}
            </p>
          </div>
          <p className="text-muted-foreground text-sm">({score})</p>
        </div>
      </div>
    </div>
  );
};
