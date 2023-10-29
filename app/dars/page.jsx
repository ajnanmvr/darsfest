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

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Dars Name"
        value={searchText}
        onChange={handleSearch}
      />
      <div>
        {searchText !== "" && filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index}>
              <Link href={`/dars/${item.slug}`}>
                <h1>{item.darsname}</h1>
              </Link>
            </div>
          ))
        ) : (
          <p>{searchText === "" ? "Enter a search term" : "No data found"}</p>
        )}
      </div>
    </div>
  );
}

export default DarsWise;
