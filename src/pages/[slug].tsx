import { useRouter } from "next/router";
import LinkCard, { CardInfo } from "../Components/LinkCard";
import useSWR from "swr";
import AddBtn from "../Components/AddBtn";
import { link } from "fs";
import LinkDetsModal from "../Components/LinkDetsModal";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserPage() {
  const router = useRouter();
  const id = String(router.query.slug!);
  const { data, error, isLoading } = useSWR(`/api/getLinks?id=${id}`, fetcher);
  const [displayNewlinkBox, setDisplayNewlinkBox] = useState(false);

  //TODO add spinner
  var links: CardInfo[] = [];

  if (data) {
    const returnedLinks = data[id];
    if (returnedLinks) {
      links = returnedLinks;
    }
  }

  const handleAddLink = ({ linkAddress, linkTitle}: { linkAddress: string; linkTitle: string; }) => {
    console.log("Adding Link");
    const newData = { linkAddress, linkTitle };
    links.push(newData)

    const sendData = {
      id: id,
      data: links
    }

    fetch("/api/updateLinks", {
      method: "POST",
      body: JSON.stringify(sendData)
    })
  };

  return (
    <div className="flex w-full h-full flex-col justify-center items-center gap-5 text-center">
      <LinkDetsModal
        addLinkFunc={handleAddLink}
        display={displayNewlinkBox}
        setDisplay={setDisplayNewlinkBox}
      />
      <div className="text-4xl">Welcome back {id}!</div>{" "}
      {/*TODO: gradient on name*/}

      <div className="text-2xl text-gray-400">
        {links.length !== 0 ? (
          "Here are the links you saved:"
        ) : (
          <span>
            You haven't saved any link!! <br />
            Click here to save one:
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-[36rem]">
        {links.map((link, index) => {
          return <LinkCard cardInfo={link} key={index} />;
        })}
        <AddBtn onClick={() => setDisplayNewlinkBox(true)} />
      </div>
    </div>
  );
}
