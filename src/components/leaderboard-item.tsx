import Image from "next/image";

interface RankType {
  rank: string;
  name: string;
  score: string;
  date: Date;
  img: string;
}

export const LeaderboardItem = ({ rank, name, score, date, img }: RankType) => {
  return (
    <div className="bg-card h-20 grow mb-5 rounded-lg p-3">
      <div className="flex h-full">
        <Image
          width={54}
          height={54}
          src={img + `?username=[${name}]`}
          alt="profile image"
          className="flex self-center items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl"
        ></Image>

        <div className="flex flex-col items-start justify-center ms-5">
          <div className="flex justify-between items-center">
            <p>{name}</p>
            <p className="ms-2 text-[.8rem] text-muted-foreground">
              {date.getDate() +
                " / " +
                date.getMonth() +
                " / " +
                date.getFullYear()}
            </p>
          </div>
          <p className=" text-muted-foreground text-sm">({score})</p>
        </div>
      </div>
    </div>
  );
};
