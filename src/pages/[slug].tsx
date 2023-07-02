import { useRouter } from "next/router";
import LinkCard from "../Components/LinkCard";
import db from "../../files/db.json";

export default function UserPage() {
  const router = useRouter();
  const user = String(router.query.slug!);
  const links = db["shreyash"];

  return (
    <div className="flex w-full h-full flex-col justify-center items-center gap-5">
      <div className="text-4xl">Welcome back {user}!</div>{" "}
      {/*TODO: gradient on name*/}
      <div className="text-2xl text-gray-400">
        Here are the links you saved:{" "}
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-[36rem]">
        {links.map((link) => {
          return <LinkCard cardInfo={link} />;
        })}
      </div>
    </div>
  );
}
