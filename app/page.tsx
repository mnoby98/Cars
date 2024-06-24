"use client";
import { CustomFilter, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import Hero from "@/components/Hero";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import ShowMore from "@/components/ShowMore";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);

  const [loading, setLoadding] = useState(false);

  const [manufacturer, setManuFacturer] = useState("");

  const [model, setModel] = useState("");

  const [fuel, setFuel] = useState("");

  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoadding(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadding(false);
    }
  };
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  const handleSetFuel = (selected: string | number) => {
    if (typeof selected === "string") {
      setFuel(selected);
    }
  };

  const handleSetYear = (selected: string | number) => {
    if (typeof selected === "number") {
      setYear(selected);
    }
  };

  return (
    <main className=" overflow-hidden ">
      <Hero />
      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar
            setModel={setModel}
            setManuFacturer={setManuFacturer}
          />
          <div className="home__filter-container">
            <CustomFilter
              setFilter={handleSetFuel}
              title="fuel"
              options={fuels}
            />
            <CustomFilter
              setFilter={handleSetYear}
              title="year"
              options={yearsOfProduction}
            />
          </div>
        </div>

        {allCars.length > 0 && !loading ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard
                  key={index}
                  car={car}
                />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full  flex-center">Loading...</div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              setLimit={setLimit}
              isNext={limit > allCars.length}
            />
          </section>
        ) : (
          <div className=" home__error-container">
            <h2 className=" text-black text-xl font-bold">Oops,no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
