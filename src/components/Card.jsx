import React, { useState } from "react";

export const Card = ({
  img,
  symbol,
  name,
  rank,
  current_price,
  price_change_percentage_24h,
  high,
  low,
}) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-4 rounded-lg shadow-lg text-white  shrink-0 flex flex-col w-max m-2">
      <div className="flex flex-row items-center border-b-gray-500 border-b pb-3">
        <img src={img} alt={name + "img"} className="w-8 mr-3" />
        <span className="mr-3 font-semibold text-lg">
          {symbol.toUpperCase()}
        </span>
        <span className="bg-slate-500 mr-3 text-xs px-1">
          {name.toUpperCase()}
        </span>
        <span className="text-slate-300 ml-5">{rank}</span>
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <span className="font-bold text-lg">₹{current_price}</span>
        <span className="text-slate-500 text-sm">
          {price_change_percentage_24h}%
        </span>
      </div>
      <div className="text-center font-mono">24H</div>
      <div className="text-sm font-serif flex flex-row justify-between">
        <span className="mr-2">High- {high}</span>
        <span>Low-{low}</span>
      </div>
    </div>
  );
};
