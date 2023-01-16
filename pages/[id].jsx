import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
export default function CountryPage(params) {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState(null);
  const [lang, setLang] = useState("");
  const [curr, setCurr] = useState("");

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${id}`).then((res) => {
      console.log(res.data[0]);
      let languages = "";
      for (let key in res.data[0].languages) {
        languages += res.data[0].languages[key];
        languages += " ";
      }
      let currencies = "";
      for (let key in res.data[0].currencies) {
        currencies += res.data[0].currencies[key].name;
        currencies += " ";
      }
      setCurr(currencies);
      setLang(languages);
      setData(res.data[0]);
    });
  }, []);
  return (
    <Layout>
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
        {data != null ? (
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
                  Capital:{" "}
                  <span className="font-normal">{data.capital[0]}</span>
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
        ) : (
          <>Loading...</>
        )}
      </div>
    </Layout>
  );
}
