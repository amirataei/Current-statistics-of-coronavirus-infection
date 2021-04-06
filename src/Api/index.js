import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (Country) => {

  let changeableUrl = url

  if(Country){
    changeableUrl = `${url}/countries/${Country}`
  }
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changeableUrl);
  return { confirmed, recovered, deaths, lastUpdate };
};

export const fetchDailydate = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedata = data.map((dailyDate) => ({
      confirmed: dailyDate.confirmed.total,
      deaths: dailyDate.deaths.total,
      date: dailyDate.reportDate,
    }));
    return modifiedata;
  } catch {}
};

export const fetchCountries = async () => {
  try {
    const {data : {countries}} = await axios.get(`${url}/countries`);
    console.log(countries)
    return countries.map((country) => country.name)
  } catch(error) {
    console.log(error)
  }
};
