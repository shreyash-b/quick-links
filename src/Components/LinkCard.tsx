import Link from "next/link";

type CardProps = {
  cardInfo: {
    linkTitle: string;
    linkAddress: string;
  };
};

export default function LinkCard(props: CardProps) {
  return (
    <Link
      href={props.cardInfo.linkAddress}
      target="_blank"
      className="aspect-square w-[8rem] text-xl grid place-items-center text-center  text-white-100 font-thin bg-white/[0.15] rounded-xl"
    >
      {props.cardInfo.linkTitle}
    </Link>
  );
}
