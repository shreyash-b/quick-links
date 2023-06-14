import { Children } from "react";

type layoutProp = {
    children: JSX.Element
}

export default function Layout({ children } : layoutProp) {
  return (
    <>
      { children }
    </>
  );
}
