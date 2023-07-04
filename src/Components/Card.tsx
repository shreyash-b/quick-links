import { ReactElement, ReactPropTypes } from "react";

type CardProps = {
    children: ReactElement
}

export default function Card(props: CardProps) {
  return (
    <div className="aspect-square w-[8rem] text-xl grid place-items-center place-content-center text-center text-white-100 font-thin bg-white/[0.15] rounded-xl">
        {props.children}
    </div>
  );
}
