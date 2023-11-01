"use client";
import React, { useState } from "react";
import Link from "next/link";
import Data from "../../data/FullData.json";

function DarsWise() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  // Check if filteredData is empty, and display uniqueData if it is
  const displayData = filteredData.length > 0 ? filteredData : uniqueData;

  return (<>
    <div className="lg:fixed lg:right-20 lg:top-5 bg-white w-full lg:w-fit text-center rounded-full lg:p-4 px-4 p-10">
        <Link className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1" href="/">Candidates
        </Link>

        <Link className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1" href="/dars/">Dars List
        </Link>
      </div>
    <div className="p-12 pt-0 lg:p-20 flex flex-col">
            
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
      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {displayData.map((item, index) => (
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
    </div></>
  );
}

export default DarsWise;
