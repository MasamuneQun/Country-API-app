"use client"
import { useEffect } from "react"

export default function DropItem(props) {
	return (
		<button
			id={props.value}
			onClick={props.filter}
			className="block px-6 py-4 bg-White dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-White text-base transition-300 w-[200px] text-left first:rounded-t-lg  last:rounded-b-lg hover:bg-LightBackground hover:drop-shadow"
			value={props.value}
		>
			{props.name}
		</button>
	)
}
