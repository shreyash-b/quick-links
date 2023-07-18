import Link from "next/link";
import Card from "./Card";
import Button from "./Button";

type CardProps = {
  cardInfo: {
    linkTitle: string;
    linkAddress: string;
  };
  handleEdit: Function;
};

function PencilIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
      {/* <path d="M794.717-664.087 665.761-793.043l41.043-41.283q17.718-17.717 44.055-17.337 26.337.38 44.771 18.337l40.609 40.369q18.435 18.196 17.837 44.153-.598 25.956-18.315 43.674l-41.044 41.043ZM152.87-117.13q-14.674 0-24.37-9.696-9.696-9.696-9.696-24.37v-81.217q0-6.717 2.359-12.554 2.359-5.837 7.837-11.316l494.761-494.76 129.196 128.717-494.761 495q-5.718 5.478-11.555 7.837t-12.554 2.359H152.87Z" /> */}
      <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
    </svg>
  );
}

export default function LinkCard(props: any) {
  return (
    <Card className="relative">
      <Link
        href={props.cardInfo.linkAddress}
        className="h-full w-full grid place-content-center"
        target="_blank"
      >
        {props.cardInfo.linkTitle}
      </Link>
      <button
        className="absolute w-fit h-fit shadow-slate-400 shadow-sm sha rounded-lg p-[1px] fill-slate-300 right-1 top-1"
        onClick={() => props.handleEdit(props.index)}
      >
        <PencilIcon className="w-6 aspect-square" />
      </button>
    </Card>
  );
}

export type CardInfo = CardProps["cardInfo"];
