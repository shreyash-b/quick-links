import Link from "next/link";
import Card from "./Card";
import Button from "./Button";

type CardProps = {
  cardInfo: {
    linkTitle: string;
    linkAddress: string;
  };
};

function PencilIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
      <path d="M794.717-664.087 665.761-793.043l41.043-41.283q17.718-17.717 44.055-17.337 26.337.38 44.771 18.337l40.609 40.369q18.435 18.196 17.837 44.153-.598 25.956-18.315 43.674l-41.044 41.043ZM152.87-117.13q-14.674 0-24.37-9.696-9.696-9.696-9.696-24.37v-81.217q0-6.717 2.359-12.554 2.359-5.837 7.837-11.316l494.761-494.76 129.196 128.717-494.761 495q-5.718 5.478-11.555 7.837t-12.554 2.359H152.87Z" />
    </svg>
  );
}

export default function LinkCard(props: CardProps) {
  return (
    <Card className="relative">
      <Link
        href={props.cardInfo.linkAddress}
        className="h-full w-full grid place-content-center"
        target="_blank"
      >
        {props.cardInfo.linkTitle}
      </Link>
      <button className="absolute w-fit h-fit border-l-neutral-100 border-x-[1px] rounded-lg p-[1px] fill-slate-500 right-1 top-1">
        <PencilIcon className="w-6 aspect-square" />
      </button>
    </Card>
  );
}

export type CardInfo = CardProps["cardInfo"];
