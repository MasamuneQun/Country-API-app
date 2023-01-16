import { motion, AnimatePresence } from "framer-motion";
import { isAbsolute, relative } from "path";
import { useState } from "react";
import { forwardRef } from "react";
import Link from "next/link";
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
      };
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={Item}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[280px] h-[300px] rounded-lg bg-White drop-shadow-md justify-self-center truncate select-none CountryItem"
    >
      <Link href={props.country}>
        <img
          src={props.flag}
          alt="flag"
          className="w-[280px] h-[150px] rounded-t-lg"
        />
        <div className="py-6 px-4">
          <div className="font-bold text-xl">{props.country}</div>
          <div className="pt-4">
            <div>
              <div className="text-semibold text-sm">
                Population:
                <span className="text-sm text-LightInput pl-1">
                  {props.population}
                </span>
              </div>
              <div className="text-semibold text-sm">
                Region:
                <span className="text-sm text-LightInput pl-1">
                  {props.region}
                </span>
              </div>
              <div className="text-semibold text-sm">
                Capital:
                <span className="text-sm text-LightInput pl-1">
                  {props.capital}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

export default CountryItem;
