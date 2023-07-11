export default function Button(props: any) {
  return (
    <button
      {...props}
      type="button"
      className={`m-1 border-solid border-2 border-teal-800 rounded p-3 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
