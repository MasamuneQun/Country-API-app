"use client"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import CountryItem from "./CountryItem"
import { AnimatePresence } from "framer-motion"

const Items = ({ currentItems, animate }) => {
	return (
		<AnimatePresence mode="popLayout" custom={animate} initial={false}>
			{currentItems.map((elem) => {
				return (
					<CountryItem
						key={elem.name.official}
						flag={elem.flags.png}
						custom={animate}
						country={elem.name.official}
						population={elem.population}
						region={elem.region}
						capital={elem.capital[0]}
					/>
				)
			})}
		</AnimatePresence>
	)
}

export default function RenderedCountries({ itemsPerPage, items }) {
	useEffect(() => {
		setPage(0)
		const newOffset = 0

		setItemOffset(newOffset)
	}, [items])
	const [itemOffset, setItemOffset] = useState(0)
	const [animate, setAnimate] = useState(false)
	const endOffset = itemOffset + itemsPerPage
	const [page, setPage] = useState(0)
	const currentItems = items.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(items.length / itemsPerPage)

	// Function Handler
	const handlePageClick = async (event) => {
		if (event.selected > page) {
			setAnimate(false)
			setPage(event.selected)
		} else {
			setAnimate(true)
			setPage(event.selected)
		}
		const newOffset = (event.selected * itemsPerPage) % items.length

		setItemOffset(newOffset)
	}

	return (
		<>
			<div className="flex flex-col gap-y-6 items-center lg:grid lg:gap-y-12 lg:grid-cols-4   mt-0 pb-2 relative overflow-hidden">
				<Items currentItems={currentItems} animate={animate} />
			</div>

			<ReactPaginate
				forcePage={page}
				breakLabel=""
				nextClassName="fixed  top-[57%] right-6 select-none "
				previousClassName="fixed  top-[57%] left-6 select-none "
				disabledClassName="hidden"
				nextLabel={
					<img
						src="chevron-forward-outline.svg"
						className="h-[40px] rotate-0 bg-White drop-shadow-lg rounded-full p-2 transition duration-200 hover:bg-GreyBackground hover:drop-shadow-lg dark:bg-slate-400 dark:hover:bg-slate-300"
					/>
				}
				previousLabel={
					<img
						src="chevron-back-outline.svg"
						className="h-[40px] bg-White drop-shadow-lg rounded-full p-2 transition duration-200 hover:bg-GreyBackground hover:drop-shadow-lg dark:bg-slate-400 dark:hover:bg-slate-300"
					/>
				}
				onPageChange={handlePageClick}
				pageRangeDisplayed={0}
				pageCount={pageCount}
				marginPagesDisplayed={0}
				containerClassName="FFFFF"
				activeClassName="hidden"
				renderOnZeroPageCount={null}
			/>
		</>
	)
}
