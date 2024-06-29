import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Landing = ({ data }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      if (search === "") {
        setFilteredData(data.slice(0, 5));
      } else {
        setFilteredData(
          data.filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    }
  }, [search, data]);
  return (
    <>
      {filteredData ? (
        <>
          <section className="flex flex-col justify-center items-center w-full my-10">
            <h1 className="font-bold text-3xl mt-4 mb-4 mx-5 text-center">
              Accurate and up-to-date cryptocurrency prices.
            </h1>
            <div className="text-slate-400 flex flex-col items-center justify-center text-sm font-semibold mb-5 mt-2">
              <p className="text-center">
                CoinScope delivers the most accurate and current prices for the
                top cryptocurrencies.
              </p>
              <p>Your go-to source for cryptocurrency prices.</p>
            </div>
            <div className="w-3/6 mt-6">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-zinc-700 focus:border-zinc-500"
                  placeholder="Search a Coin"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </section>
          <section className="mx-10 mt-10">
            <div className="font-semibold text-xl mb-5">Market Trend</div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              {filteredData.map((element, index) => {
                return (
                  <Card
                    key={index}
                    img={element.image}
                    symbol={element.symbol}
                    name={element.name}
                    rank={element.market_cap_rank}
                    current_price={element.current_price}
                    price_change_percentage_24h={
                      element.price_change_percentage_24h
                    }
                    high={element.high_24h}
                    low={element.low_24h}
                  />
                );
              })}
            </div>
          </section>
        </>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};
