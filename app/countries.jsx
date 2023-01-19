"use client";
import { useState, useEffect } from "react";
import RenderedCountries from "./components/renderedCountries";
import DropItem from "./components/dropdownItem";

export default function Countries(props) {
  const allCountries = props.data;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [inputCountry, setInputCountry] = useState("");
  useEffect(() => {
    //
    let newData = [];
    if (inputCountry != "") {
      allCountries.map((elem) => {
        if (
          elem.name.official.toLowerCase().indexOf(inputCountry) > -1 ||
          elem.name.common.toLowerCase().indexOf(inputCountry) > -1
        ) {
          newData.push(elem);
        }
      });
    } else {
      newData = allCountries;
    }
    console.log(newData);
    if (filter != null) {
      let filterData = [];
      newData.map((elem) => {
        if (elem.region == filter) {
          filterData.push(elem);
        }
      });
      setData(filterData);
    } else {
      setData(newData);
    }
  }, [filter, inputCountry]);

  // Filter Function

  function Filter(e) {
    const region = e.target.value;
    if (region == filter) {
      setFilter(null);
    } else {
      setFilter(region);
    }
  }
  // Search input function
  function InputChange() {
    const input = document.getElementById("input");
    setInputCountry(input.value);
  }

  // Animation functions
  function OpenMenu() {
    const menu = document.getElementById("menu");
    const image = document.getElementById("img");
    image.classList.add("rotate-90");
    menu.classList.add("transition", "duration-300", "z-10");
    menu.classList.remove("opacity-0", "z-[-10]");
  }
  function CloseMenu() {
    const menu = document.getElementById("menu");
    const image = document.getElementById("img");
    image.classList.remove("rotate-90");
    menu.classList.remove("transition", "duration-300", "z-10");
    menu.classList.add("opacity-0", "z-[-10]");
  }
  function Focus() {
    const lens = document.getElementById("lens");
    const input = document.getElementById("input");
    lens.classList.remove("left-8", "opacity-50");
    lens.classList.add("left-0", "opacity-0");
    input.classList.remove("pl-12");
  }
  function Blur() {
    const lens = document.getElementById("lens");
    const input = document.getElementById("input");
    lens.classList.add("left-8", "opacity-50");
    lens.classList.remove("left-0", "opacity-0");
    input.classList.add("pl-12");
  }
  function divFocus() {
    const input = document.getElementById("input");
    input.focus();
  }

  return (
    <div>
      {/* Search button and filter */}
      <div className="flex flex-col gap-y-4 items-center lg:flex-row justify-between py-12 px-24 select-none">
        {/* Search button */}
        <div
          onClick={divFocus}
          className="bg-White px-8 py-4 drop-shadow-md rounded-md max-w-[300px] lg:min-w-[600px] flex text-LightInput cursor-text"
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
            onChange={InputChange}
            id="input"
            type="text"
            className="bg-White block outline-0 w-full transition-all duration-300 pl-12 cursor-text"
            placeholder="Search for a country..."
          />
        </div>
        {/* Filter */}
        <div onMouseEnter={OpenMenu} onMouseLeave={CloseMenu}>
          <div className="bg-White py-4 pl-6 pr-4 drop-shadow-md rounded-md text-sm flex w-[200px]  justify-between hover:bg-LightBackground hover:drop-shadow">
            <button className="">Filter by Region</button>
            <img
              src="chevron-forward-outline.svg"
              id="img"
              alt=""
              className="max-h-4 pt-1 transition duration-200"
            />
          </div>
          <div
            className="absolute opacity-0 z-[-10] pt-1 drop-shadow-md"
            id="menu"
          >
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
  );
}
