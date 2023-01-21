import Countries from './countries';

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
  const data = await res.json()
  return data
}

export default async function Page() {
  const data = await getCountries();
  return (
    <div>
      <Countries data={data} />
    </div>
  );
}
