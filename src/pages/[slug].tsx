import { useRouter } from "next/router";
import LinkCard, { CardInfo } from "../Components/LinkCard";
import useSWR from "swr";
import AddBtn from "../Components/AddBtn";
import { link } from "fs";
import LinkDetsModal from "../Components/LinkDetsModal";
import { useRef, useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const generateLinkInfo = (linkTitle: string, linkAddress: string) => {
  return {
    linkTitle: linkTitle,
    linkAddress: linkAddress,
  };
};

export default function UserPage() {
  const router = useRouter();
  const id = String(router.query.slug!);
  
  const { data, error, isLoading } = useSWR(`/api/getLinks?id=${id}`, fetcher);
  const [displayNewlinkBox, setDisplayNewlinkBox] = useState(false);
  const [linkInfo, setLinkInfo] = useState(generateLinkInfo("", ""));
  const [links, setLinks] = useState<CardInfo[]>([]);
  var currentLinkKey = useRef(-1);

  //TODO add spinner
  //TODO handle error

  if (isLoading) return <></>;


  if (data && links.length === 0) {
    const returnedLinks = data[id];
    if (returnedLinks) {
      setLinks(returnedLinks);
    }
  }
  
  // console.log(links);
  const postLinks = (links: CardInfo[]) => {
    const sendData = {
      id: id,
      data: links,
    };

    return fetch("/api/updateLinks", {
      method: "POST",
      body: JSON.stringify(sendData),
    });
  };

  const handleSaveLink = (
    linkTitle: string,
    linkAddress: string,
    key: number = currentLinkKey.current
  ) => {
    console.log("Updating Link");
    console.log(key);
    if (key >= links.length) return;

    const newKeyInfo = generateLinkInfo(linkTitle, linkAddress);
    setDisplayNewlinkBox(false);
    
    setLinks((prevLinks)=>{
      prevLinks[key] = newKeyInfo;
      postLinks(prevLinks);
      return prevLinks;
    })
    
  };

  const handleUpdate = (key: number) => {
    if (key >= links.length) return;
    setLinkInfo(links[key]);
    currentLinkKey.current = key;

    setDisplayNewlinkBox(true);
  };

  const addNewLink = () => {
    const oldLen = links.length;
    setLinks((oldValue)=>{
      oldValue.push(generateLinkInfo("", ""));
      return oldValue;
    })
    handleUpdate(oldLen);
  };

  // console.log(links);

  return (
    <div className="flex w-full h-full flex-col justify-center items-center gap-5 text-center">
      {displayNewlinkBox ? (
        <LinkDetsModal
          addLinkFunc={handleSaveLink}
          setDisplay={setDisplayNewlinkBox}
          currLinkInfo={linkInfo}
          setCurrLink={setLinkInfo}
        />
      ) : (
        <></>
      )}
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
      <div className="flex flex-wrap gap-4 justify-center max-w-[36rem] z-0">
        {links.map((link, loc) => {
          return (
            <LinkCard
              cardInfo={link}
              key={loc}
              index={loc}
              handleEdit={handleUpdate}
            />
          );
        })}
        <AddBtn onClick={addNewLink} />
      </div>
    </div>
  );
}
