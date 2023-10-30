"use client";
import React, { useState } from "react";
import Link from "next/link";
import Data from "../../data/FullData.json";

function DarsWise() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([...Data]);

  const uniqueData = Array.from(new Set(Data.map((item) => item.darsname))).map(
    (darsname) => {
      return Data.find((item) => item.darsname === darsname);
    }
  );

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);

    // Filter the uniqueData based on the search input
    const filteredResults = uniqueData.filter((item) => {
      return item.darsname.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredData(filteredResults);
  };

  return (
    <div className="p-12 lg:p-20">
      <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
        Dars Wise Program List
      </h1>
      <input
        type="text"
        placeholder="Search by Dars Name"
        value={searchText}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-xl border-2 border-dashed border-primary"
      />
      <div>
        {filteredData.length > 0 ? (
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {filteredData.map((item, index) => (
              <div key={index} className="w-72 bg-secondary p-6 rounded-xl">
                <h1 className="font-bold line-clamp-2 h-12">{item.darsname}</h1>
                <div className="flex gap-2 mt-1">
                  <Link href={`/dars/jr/${item.slug}`}>
                    <button className="px-2 py-1 bg-primary hover:bg-primaryDark rounded-lg text-white font-semibold">
                      Junior
                    </button>
                  </Link>
                  <Link href={`/dars/sr/${item.slug}`}>
                    <button className="px-2 py-1 bg-primary hover:bg-primaryDark rounded-lg text-white font-semibold">
                      Senior
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full mt-3 py-32 flex flex-wrap px-6 text-center gap-5 justify-center items-center font-bold bg-secondary border-2 border-secondary rounded-xl">
            <svg
              viewBox="0 0 24 24"
              className="w-32 h-32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 13H6.01M6 17H6.01M10 13H10.01M14 13H14.01M18 17H18.01M18 13H18.01M16 3V5H8V9M10 17H14M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H5.2C4.07989 9 3.51984 9 3.09202 9.21799C2.71569 9.40973 2.40973 9.71569 2.21799 10.092C2 10.5198 2 11.0799 2 12.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <p className="mt-5">
              {searchText === ""
                ? "Enter Dars name in search bar"
                : "No data found"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DarsWise;
