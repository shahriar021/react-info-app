import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

export default function FetchingData() {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const FetchingData = async (url) => {
    setIsloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsloading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setIsloading(true);
      setError(error);
    }
  };

  useEffect(() => {
    FetchingData(url);
  }, []);

  const handleRemove = (name) => {
    const updated = countries.filter((country) => country.name.common !== name);

    setCountries(updated);
  };

  const handleSearch = (search) => {
    let value = search.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setCountries(newCountries);
  };

  return (
    <div>
      {isLoading && <h1>loading........</h1>}
      {error && <h1>{error.message}</h1>}
      <Search onSearch={handleSearch} />
      {countries && <Countries countries={countries} onRemove={handleRemove} />}
    </div>
  );
}
