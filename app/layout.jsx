"use client"
import "./globals.css"
import { useEffect } from "react"
function Click(e) {
	const img = e.target
	const html = document.getElementById("html")
	html.classList.toggle("dark")
	img.classList.toggle("rotate-180")
	if (sessionStorage.getItem("toggle") == "false") {
		sessionStorage.setItem("toggle", "true")
	} else {
		sessionStorage.setItem("toggle", "false")
	}
	if (sessionStorage.getItem("mode") == "light") {
		sessionStorage.setItem("mode", "dark")
	} else {
		sessionStorage.setItem("mode", "light")
	}
}
export default function RootLayout(props) {
	useEffect(() => {
		const mode = sessionStorage.getItem("mode")
		const toggle = sessionStorage.getItem("toggle")
		if (mode == "dark") {
			const html = document.getElementById("html")
			html.classList.toggle("dark")
		}
		if (toggle == "true") {
			const img = document.getElementById("sunMoon")
			img.classList.toggle("rotate-180")
		}
	}, [])
	return (
		<html lang="en">
			<body>
				<div id="html" className="h-screen w-full flex flex-col relative">
					<div className="bg-White p-6 dark:bg-gray-700 drop-shadow-[0px_-25px_20px_#858585] select-none duration-300">
						<nav className="flex flex-row justify-between ">
							<h1 className="ml-6 dark:text-white font-bold text-2xl">Where in the world?</h1>
							<h1 className="mr-6 flex font-semibold mt-2">
								<div>
									<img
										id="sunMoon"
										onClick={Click}
										src="day-and-night.png"
										alt=""
										className="h-[30px] w-[30px] duration-300"
									/>
								</div>
							</h1>
						</nav>
					</div>
					<div className="w-full grow bg-LightBackground dark:bg-gray-800 duration-300">{props.children}</div>
				</div>
			</body>
		</html>
	)
}
