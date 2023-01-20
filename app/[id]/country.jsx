"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { use } from "react";
import Image from "next/image";

async function getCountry(id) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  return await res.json();
}
export default function Country(props) {
  const router = useRouter();
  const id = props.country;
  const country = use(getCountry(id));
  const data = country[0];
  console.log(data);
  // const [lang, setLang] = useState("");
  // const [curr, setCurr] = useState("");
  // useEffect(() => {
  //   let languages = "";
  //   for (let key in data.languages) {
  //     languages += data.languages[key];
  //     languages += " ";
  //   }
  //   let currencies = "";
  //   for (let key in data.currencies) {
  //     currencies += data.currencies[key].name;
  //     currencies += " ";
  //   }
  //   setCurr(currencies);
  //   setLang(languages);
  // }, []);
  return (
    <>
      <div className="flex flex-col gap-y-4 items-center lg:flex-row justify-between py-12 px-24 select-none">
        <div>
          <button
            className="flex justify-center bg-White drop-shadow-md px-12 py-3 font-light text-xl rounded-lg hover:bg-LightBackground hover:drop-shadow-lg duration-150"
            onClick={() => {
              router.push("/");
            }}
          >
            <img
              className="max-h-7 pt-1 mr-1"
              src="arrow-left-svgrepo-com.svg"
            />
            Back
          </button>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-36 px-24">
        <>
          <div className="lg:flex items-center">
            <img
              className=" drop-shadow-xl border border-GreyBackground"
              src={data.flags.svg}
            />
          </div>
          <div className="flex flex-col py-8 items-center lg:items-start">
            <h1 className="text-4xl font-bold">{data.name.official}</h1>
            <div className="flex flex-col gap-y-4 pt-8">
              <div className="text-lg font-semibold">
                Native Name:{" "}
                <span className="font-normal">{data.name.common}</span>
              </div>
              <div className="text-lg font-semibold">
                Population:{" "}
                <span className="font-normal">{data.population}</span>
              </div>
              <div className="text-lg font-semibold">
                Region: <span className="font-normal">{data.region}</span>
              </div>
              <div className="text-lg font-semibold">
                Sub Region:{" "}
                <span className="font-normal">{data.subregion}</span>
              </div>
              <div className="text-lg font-semibold">
                Capital: <span className="font-normal">{data.capital[0]}</span>
              </div>
              <div className="text-lg font-semibold">
                Languages: <span className="font-normal">{}</span>
              </div>
              <div className="text-lg font-semibold">
                Currencies: <span className="font-normal">{}</span>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
