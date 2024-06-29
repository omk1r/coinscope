import React from "react";

export const Top100 = ({ data }) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Coin
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3">
                Total Volume
              </th>
              <th scope="col" className="px-6 py-3">
                Circulating Supply
              </th>
              <th scope="col" className="px-6 py-3">
                Total Supply
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {element.name}
                  </th>
                  <td className="px-6 py-4">
                    <span className="font-bold mr-1">₹</span>
                    {element.current_price}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold mr-1">₹</span>
                    {element.market_cap}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold mr-1">₹</span>
                    {element.total_volume}
                  </td>
                  <td className="px-6 py-4">
                    <span className="mr-1"> {element.circulating_supply}</span>
                    {element.symbol.toUpperCase()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="mr-1">{element.total_supply} </span>
                    {element.symbol.toUpperCase()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
