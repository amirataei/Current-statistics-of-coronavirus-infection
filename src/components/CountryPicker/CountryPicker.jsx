import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import {fetchCountries} from '../../Api'
function CountryPicker({handleCountryChange}) {
  const [fetchCountry, setFetchedContries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedContries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedContries]);

  console.log(fetchCountry);
  return (
    <FormControl>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchCountry.map((Country,i)=> <option key={i} value={Country}>{Country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
