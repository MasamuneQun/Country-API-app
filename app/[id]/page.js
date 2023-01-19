import Country from "./country"
async function getCountries() {
  const res = await fetch("https://restcountries.com/v3/all?fields=name,capital,region,population,flags")
  const data = await res.json()
  return data
}

async function getCountry(id) {
  const res = await fetch(`https://restcountries.com/v3/name/${id}`)
  const data = await res.json()
  return data[0]
}
export async function generateStaticParams() {
  const countries = await getCountries()
  return countries.map((elem) => {
    return {
      id: elem.name.official
    }
  })
}
export default async function Page(props) {
  const country = await getCountry(props.params.id)
  return <div>
    <Country country={country} />
  </div>
}