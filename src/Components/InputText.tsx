export default function InputText(props: any) {
  return (
    <input
      {...props}
      type="text"
      className={`max-w-[15rem] outline-none p-3 m-1 bg-[#ffffff0f] border-solid border-teal-800 border-2 rounded ${props.className}`}
    />
  );
}
