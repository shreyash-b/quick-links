import { useRouter } from "next/router";
import LinkCard, { CardInfo } from "../Components/LinkCard";
import useSWR from "swr";
import AddBtn from "../Components/AddBtn";
import { link } from "fs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserPage() {
  const router = useRouter();
  const id = String(router.query.slug!);

  const { data, error, isLoading } = useSWR(`/api/getLinks?id=${id}`, fetcher);
  //TODO add spinner
  var links: CardInfo[] = [];

  if (data) {
    const returnedLinks = data[id];
    if (returnedLinks) {
      links = returnedLinks;
    }
  }

  return (
    <div className="flex w-full h-full flex-col justify-center items-center gap-5 text-center">
      <div className="text-4xl">Welcome back {id}!</div>{" "}
      {/*TODO: gradient on name*/}
      <div className="text-2xl text-gray-400">
        {links.length !== 0
          ? "Here are the links you saved:"
          : <span>You haven't saved any link!! <br />
                   Click here to save one:</span>}
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-[36rem]">
        {links.map((link, index) => {
          return <LinkCard cardInfo={link} key={index} />;
        })}
        <AddBtn />
      </div>
    </div>
  );
}
