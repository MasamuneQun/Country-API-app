import Country from "./country"
async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
  const data = await res.json()
  return data
}

// async function getCountry(id) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${id}`)
//   return res.json()
// }
export async function generateStaticParams() {
  const countries = await getCountries()
  return countries.map((elem) => {
    return {
      id: elem.name.official
    }
  })
}
export default async function Page(props) {
  return <div>
    <Country country={props.params.id} />
  </div>
}