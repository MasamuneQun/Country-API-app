"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { forwardRef } from "react"
const CountryItem = forwardRef((props, ref) => {
	const Item = {
		initial: {
			opacity: 0,
			x: 0,
			y: 0,
		},
		animate: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.3,
				delay: 0.3,
			},
		},
		exit: (direction) => {
			return {
				x: direction ? 100 : -100,
				opacity: 0,
				transition: {
					duration: 0.4,
				},
			}
		},
	}

	return (
		<motion.div
			ref={ref}
			variants={Item}
			initial="initial"
			animate="animate"
			exit="exit"
			className="w-[270px] h-[300px] rounded-lg   dark:text-gray-200 drop-shadow-md justify-self-center  select-none CountryItem "
		>
			<div className="bg-White dark:bg-slate-700 duration-300 rounded-lg">
				<Link href={props.country}>
					<img src={props.flag} alt="flags" className="w-[270px] h-[150px] rounded-md" />
					<div className="py-6 px-4">
						<div className="font-extrabold text-xl truncate ">{props.country}</div>
						<div className="pt-4">
							<div>
								<div className=" font-semibold text-sm">
									Population:
									<span className="text-sm font-light  pl-1 dark:text-gray-400">{props.population}</span>
								</div>
								<div className="font-semibold text-sm">
									Region:
									<span className="text-sm font-light  pl-1 dark:text-gray-400">{props.region}</span>
								</div>
								<div className="font-semibold text-sm">
									Capital:
									<span className="text-sm font-light  pl-1 dark:text-gray-400">{props.capital}</span>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</motion.div>
	)
})

export default CountryItem
