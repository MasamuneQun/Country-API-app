"use client";
export default function DropItem(props) {
  return (
    <button
      onClick={props.filter}
      className="block px-6 py-4 bg-White w-[200px] text-left text-sm first:rounded-t-lg  last:rounded-b-lg hover:bg-LightBackground hover:drop-shadow"
      value={props.value}
    >
      {props.name}
    </button>
  );
}
