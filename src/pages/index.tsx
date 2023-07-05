import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState("");

  const navigateLinksPage = () => {
    router.push(`/${id}`);
  };

  return (
    <div className="flex w-full h-full justify-center items-center flex-col">
      <h1 className="text-5xl text-center select-none py-5"> Quick Links </h1>

      <span className="text-2xl">
        <input
          type="text"
          placeholder="Enter username..."
          className="max-w-[15rem] outline-none p-3 m-1 bg-[#ffffff0f] border-solid border-teal-800 border-2 rounded"
          onChange={(e)=>setId(e.target.value)}
        />
        <input
          type="button"
          value="GO!"
          className="m-1 border-solid border-2 border-teal-800 rounded p-3"
          onClick={navigateLinksPage}
        />
      </span>
    </div>
  );
}
