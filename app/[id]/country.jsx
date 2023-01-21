"use client"
import { useRouter } from "next/navigation"
import { use } from "react"

async function getLanguages(data) {
	let languages = ""
	for (let key in data.languages) {
		languages += data.languages[key]
		languages += " "
	}
	return languages
}
async function getCurrencies(data) {
	let currencies = ""
	for (let key in data.currencies) {
		currencies += data.currencies[key].name
		currencies += " "
	}
	return currencies
}
export default function Country(props) {
	const router = useRouter()
	const data = props.country
	const lang = use(getLanguages(data))
	const curr = use(getCurrencies(data))
	return (
		<>
			<div className="flex flex-col gap-y-4 items-center lg:flex-row justify-between py-12 px-24 select-none">
				<div>
					<button
						className="flex justify-center bg-White drop-shadow-md px-12 py-3 font-light text-xl rounded-lg hover:bg-LightBackground hover:drop-shadow-lg duration-150"
						onClick={() => {
							router.push("/")
						}}
					>
						<img className="max-h-7 pt-1 mr-1" src="arrow-left-svgrepo-com.svg" />
						Back
					</button>
				</div>
			</div>
			{/* Main content */}
			<div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-36 px-24">
				<>
					<div className="lg:flex items-center lg:justify-center">
						<img
							className=" drop-shadow-xl border border-GreyBackground dark:border-gray-900 duration-300 max-h-[300px] max-w-[500px]"
							src={data.flags.svg}
							alt="Flag"
						/>
					</div>
					<div className="flex flex-col py-8 items-center lg:items-start dark:text-gray-200">
						<h1 className="text-4xl font-bold">{data.name.official}</h1>
						<div className="flex flex-col gap-y-4 pt-8">
							<div className="text-lg font-semibold">
								Native Name: <span className="font-normal">{data.name.common}</span>
							</div>
							<div className="text-lg font-semibold">
								Population: <span className="font-normal">{data.population}</span>
							</div>
							<div className="text-lg font-semibold">
								Region: <span className="font-normal">{data.region}</span>
							</div>
							<div className="text-lg font-semibold">
								Sub Region: <span className="font-normal">{data.subregion}</span>
							</div>
							<div className="text-lg font-semibold">
								Capital: <span className="font-normal">{data.capital}</span>
							</div>
							<div className="text-lg font-semibold">
								Languages: <span className="font-normal">{lang}</span>
							</div>
							<div className="text-lg font-semibold">
								Currencies: <span className="font-normal">{curr}</span>
							</div>
						</div>
					</div>
				</>
			</div>
		</>
	)
}
