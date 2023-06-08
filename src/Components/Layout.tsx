import { Children } from "react";

type layoutProp = {
    children: JSX.Element
}

export default function Layout({ children } : layoutProp) {
  return (
    <>
      <h1 className="text-5xl text-center select-none py-5"> Quick Links </h1>
      <hr className="mx-4" />
      { children }

    </>
  );
}
