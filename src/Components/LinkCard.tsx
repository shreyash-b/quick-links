import Link from "next/link";
import Card from "./Card";

type CardProps = {
  cardInfo: {
    linkTitle: string;
    linkAddress: string;
  };
};

export default function LinkCard(props: CardProps) {
  return (
    <Card>
      <Link href={props.cardInfo.linkAddress} className="h-full w-full grid place-content-center" target="_blank">
        {props.cardInfo.linkTitle}
      </Link>
    </Card>
  );
}

export type CardInfo = CardProps["cardInfo"];
