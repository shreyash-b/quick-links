import Image from "next/image";
import addSVG from "../files/add.svg";
import Card from "./Card";

function Icon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 281.000000 291.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,291.000000) scale(0.100000,-0.100000)"
        fill="#fff5"
        stroke="none"
      >
        <path
          d="M1365 2581 c-67 -17 -127 -74 -144 -138 -7 -24 -11 -190 -11 -440 l0
-403 -390 0 c-251 0 -408 -4 -442 -11 -65 -14 -129 -73 -148 -136 -27 -89 18
-191 102 -232 43 -20 56 -21 461 -21 l416 0 3 -423 c3 -406 4 -424 24 -462 11
-22 40 -53 63 -70 37 -26 51 -30 111 -30 60 0 74 4 111 30 23 17 52 48 63 70
20 38 21 56 24 463 l3 422 416 0 c405 0 418 1 461 21 84 41 129 143 102 232
-19 63 -83 122 -148 136 -34 7 -191 11 -442 11 l-390 0 0 403 c0 250 -4 416
-11 440 -11 43 -59 101 -98 121 -35 18 -99 26 -136 17z"
        />
      </g>
    </svg>
  );
}

export default function AddBtn() {
  return (
    <Card>
      <div className="h-[78%]">
        <Icon />
      </div>
    </Card>
  );
}
