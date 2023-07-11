import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import InputText from "../Components/InputText";
import Button from "../Components/Button";

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState("");
  
  
  const navigateLinksPage = () => {
    router.push(`/${id}`);
  };
  
  const handleInputKeydown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      navigateLinksPage();
    }
  }

  return (
    <div className="flex w-full h-full justify-center items-center flex-col">
      <h1 className="text-5xl text-center select-none py-5"> Quick Links </h1>

      <span className="text-2xl">
        <InputText
          placeholder="Enter username..."
          onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
          onKeyDown={handleInputKeydown}
          className="max-w-lg"
        />
        <Button onClick={navigateLinksPage}>GO</Button>
      </span>
    </div>
  );
}
