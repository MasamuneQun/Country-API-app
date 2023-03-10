"use client"
import { useState, useEffect } from "react"
import RenderedCountries from "./components/renderedCountries"
import DropItem from "./components/dropdownItem"

export default function Countries(props) {
	const allCountries = props.data
	const [data, setData] = useState([])
	const [filter, setFilter] = useState("null")
	const [inputCountry, setInputCountry] = useState("")
	useEffect(() => {
		if (sessionStorage.getItem("filter") != null) {
			setFilter(sessionStorage.getItem("filter"))
		}
		if (sessionStorage.getItem("input") != null) {
			setInputCountry(sessionStorage.getItem("input"))
		}

		const id = sessionStorage.getItem("dropItem")
		const item = document.getElementById(id)
		if (item != null) {
			item.classList.add("bg-GreyBackground")
			item.classList.remove("bg-White")
		}
	}, [])
	useEffect(() => {
		let newData = []
		if (inputCountry != "") {
			allCountries.map((elem) => {
				if (
					elem.name.official.toLowerCase().indexOf(inputCountry) > -1 ||
					elem.name.common.toLowerCase().indexOf(inputCountry) > -1
				) {
					newData.push(elem)
				}
			})
		} else {
			newData = allCountries
		}

		if (filter != "null") {
			let filterData = []
			newData.map((elem) => {
				if (elem.region == filter) {
					filterData.push(elem)
				}
			})
			setData(filterData)
		} else {
			setData(newData)
		}
	}, [filter, inputCountry])

	// Filter Function

	function Filter(e) {
		const region = e.target.value
		console.log(e.target)
		if (region == filter) {
			setFilter("null")
			sessionStorage.setItem("filter", "null")
			const id = sessionStorage.getItem("dropItem")
			const item = document.getElementById(id)
			if (item != null) {
				item.classList.remove("bg-GreyBackground", "dark:bg-slate-500")
				item.classList.add("bg-White", "dark:bg-slate-600")
			}
			sessionStorage.setItem("dropItem", "")
		} else {
			setFilter(region)
			sessionStorage.setItem("filter", region)
			const id = sessionStorage.getItem("dropItem")
			const item = document.getElementById(id)
			if (item != null) {
				item.classList.remove("bg-GreyBackground", "dark:bg-slate-500")
				item.classList.add("bg-White", "dark:bg-slate-600")
			}
			e.target.classList.remove("bg-White", "dark:bg-slate-600")
			e.target.classList.add("bg-GreyBackground", "dark:bg-slate-500")
			sessionStorage.setItem("dropItem", e.target.id)
		}
	}
	// Search input function

	// Animation functions
	function OpenMenu() {
		const menu = document.getElementById("menu")
		const image = document.getElementById("img")
		image.classList.add("rotate-90")
		menu.classList.add("transition", "duration-300", "z-10")
		menu.classList.remove("opacity-0", "z-[-10]")
	}
	function CloseMenu() {
		const menu = document.getElementById("menu")
		const image = document.getElementById("img")
		image.classList.remove("rotate-90")
		menu.classList.remove("transition", "duration-300", "z-10")
		menu.classList.add("opacity-0", "z-[-10]")
	}
	function Focus() {
		const lens = document.getElementById("lens")
		const input = document.getElementById("input")
		lens.classList.remove("left-8", "opacity-50")
		lens.classList.add("left-0", "opacity-0")
		input.classList.remove("pl-12")
	}
	function Blur() {
		const lens = document.getElementById("lens")
		const input = document.getElementById("input")
		lens.classList.add("left-8", "opacity-50")
		lens.classList.remove("left-0", "opacity-0")
		input.classList.add("pl-12")
	}
	function divFocus() {
		const input = document.getElementById("input")
		input.focus()
	}

	return (
		<div>
			{/* Search button and filter */}
			<div className="flex flex-col gap-y-4 items-center lg:flex-row justify-between py-12 px-24 select-none">
				{/* Search button */}
				<div
					onClick={divFocus}
					className="bg-White dark:bg-slate-600 duration-300 px-8 py-4 drop-shadow-md rounded-md max-w-[300px] lg:min-w-[600px] flex text-LightInput dark:text-White cursor-text"
				>
					<img
						id="lens"
						src="search-outline.svg"
						alt=""
						className="transition-all duration-300 left-8 absolute max-h-6 opacity-50"
					/>
					<input
						onFocus={Focus}
						onBlur={Blur}
						value={inputCountry}
						onChange={(e) => {
							setInputCountry(e.target.value)
							sessionStorage.setItem("input", e.target.value)
						}}
						id="input"
						type="text"
						className="bg-White dark:bg-slate-600 block outline-0 w-full duration-300 pl-12 cursor-text text-LightInput dark:text-White"
						placeholder="Search for a country..."
					/>
				</div>
				{/* Filter */}
				<div onMouseEnter={OpenMenu} onMouseLeave={CloseMenu}>
					<div className="bg-White dark:bg-slate-600 dark:hover:bg-slate-500 duration-300 dark:text-White py-4 pl-6 pr-4 drop-shadow-md rounded-md text-base flex w-[200px] justify-between hover:bg-LightBackground hover:drop-shadow">
						<button className="">Filter by Region</button>
						<img
							src="chevron-forward-outline.svg"
							id="img"
							alt=""
							className="max-h-4 mt-[5px] transition duration-200"
						/>
					</div>
					<div className="absolute opacity-0 z-[-10] pt-1 drop-shadow-md" id="menu">
						<DropItem name="Africa" value="Africa" filter={Filter} />
						<DropItem name="America" value="Americas" filter={Filter} />
						<DropItem name="Asia" value="Asia" filter={Filter} />
						<DropItem name="Europe" value="Europe" filter={Filter} />
						<DropItem name="Oceania" value="Oceania" filter={Filter} />
					</div>
				</div>
			</div>

			{/* Countries */}
			<div>
				<RenderedCountries itemsPerPage={8} items={data} />
			</div>
		</div>
	)
}
