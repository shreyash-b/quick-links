import { useRef, useState } from "react";
import InputText from "./InputText";
import Button from "./Button";

export default function LinkDetsModal(props: any) {
  const [linkTitle, setLinkTitle] = useState(props.currLinkInfo.linkTitle);
  const [linkAddress, setLinkAddress] = useState(props.currLinkInfo.linkAddress);

  const handleChange = (e: any) => {
    const changeType: string = e.target.name;
    switch (changeType) {
      case "linkTitle":
        setLinkTitle(e.target.value);
        break;

      case "linkAddress":
        setLinkAddress(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleAdd = () => {
    props.addLinkFunc(linkTitle, linkAddress);
  };

  return (
    <div
      className={"fixed h-screen w-screen backdrop-blur z-10 grid place-items-center"}
    >
      <div className="text-black bg-slate-300 p-2 rounded-xl">
        <div>
          <InputText
            name="linkTitle"
            type="name"
            onChange={handleChange}
            placeholder="Enter Link Title"
            value={linkTitle}
          />
          <InputText
            name="linkAddress"
            type="url"
            onChange={handleChange}
            placeholder="Enter Link Address"
            value={linkAddress}
          />
        </div>

        <Button
          onClick={() => props.setDisplay(false)}
          className="bg-red-300 border-red-500 w-20"
        >
          Cancel
        </Button>

        <Button
          onClick={handleAdd}
          className="bg-green-300 border-green-500 w-20"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
