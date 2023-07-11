import { useRef } from "react";
import InputText from "./InputText";
import Button from "./Button";

export default function LinkDetsModal(props: any) {
  const linkInfo = useRef({
    linkTitle: "",
    linkAddress: "",
  });

  const handleChange = (e: any) => {
    const changeType: string = e.target.name;
    linkInfo.current[changeType] = e.target.value;
  };

  const handleAdd = () => {
    const linkTitle = linkInfo.current.linkTitle;
    const linkAddress = linkInfo.current.linkAddress;

    props.addLinkFunc({ linkTitle, linkAddress });
  };

  return (
    <div
      className={`fixed h-screen w-screen backdrop-blur grid place-items-center ${
        props.display ? "block" : "hidden"
      }`}
    >
      <div className="text-black bg-slate-300 p-2 rounded-xl">
        <div>
          <InputText
            name="linkTitle"
            onChange={handleChange}
            placeholder="Enter Link Title"
          />
          <InputText
            name="linkAddress"
            type="url"
            onChange={handleChange}
            placeholder="Enter Link Address"
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
