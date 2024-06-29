import React from "react";

export const Header = ({ show, setShow }) => {
  return (
    <div className="flex justify-between items-center w-full p-4 border-b border-gray-400">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Coin
          <span className="text-blue-500">Scope</span>
        </span>
      </div>

      {!show ? (
        <button
          type="button"
          className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          onClick={() => setShow(true)}
        >
          Top Coins
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          onClick={() => setShow(false)}
        >
          Back
        </button>
      )}
    </div>
  );
};
