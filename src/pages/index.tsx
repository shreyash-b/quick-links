import { useRouter } from "next/router";
import { useState } from "react";
import InputText from "../Components/InputText";
import Button from "../Components/Button";

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
        <InputText
          placeholder="Enter username..."
          onChange={(e: any) => setId(e.target.value)}
        />
        <Button onClick={navigateLinksPage}>GO</Button>
      </span>
    </div>
  );
}
