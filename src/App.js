import Cards from "./components/Cards/cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import { fetchData } from "./Api";
import { useEffect, useState } from "react";
import './App.css';
import coronaimage from '../src/coronaimage.png'
function App() {
  const [data, setData] = useState({});
  const [Country, setCountry] = useState('');
  useEffect(async () => {
    const fatchData = await fetchData();
    setData(fatchData)

 
  } ,[]);

 const  handleCountryChange = async (Country) => {
  const fatchData = await fetchData(Country);
  setData(fatchData)
  setCountry(Country)
  }

  return (
    <div className="Container">
      <img className="image" src={coronaimage} />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} Country={Country}/>
    </div>
  );
}

export default App;
