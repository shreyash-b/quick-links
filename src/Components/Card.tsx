import { ReactElement, ReactPropTypes } from "react";

export default function Card(props: any) {
  return (
    <div className={`aspect-square w-[8rem] text-xl grid place-items-center place-content-center text-center text-white-100 font-thin bg-white/[0.15] rounded-xl ${props.className}`}>
      {props.children}
    </div>
  );
}
