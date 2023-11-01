"use client";
import React, { useState } from "react";
import Data from "../data/FullData.json";
import Link from "next/link";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item
  const filteredData = Data.filter((item) => {
    const searchFields = [
      "code",
      "name",
      "darsname",
      "category",
      "offstage1",
      "offstage2",
      "offstage3",
      "stage1",
      "stage2",
      "stage3",
      "groupstage1",
      "groupstage2",
      "groupstage3",
      "groupoffstage",
    ];
    return searchFields.some((field) => {
      const fieldValue = item[field] || ""; // Ensure a default value if the field is undefined
      return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (<>
    <div className="lg:fixed lg:right-20 lg:top-5 bg-white w-full lg:w-fit text-center rounded-full lg:p-4 px-4 p-10">
          <Link
            className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="/"
          >
            Candidates
          </Link>

          <Link
            className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="/dars/"
          >
            Dars List
          </Link>
        </div>
    <div className="p-12 pt-0 lg:p-20">
      <div className="flex flex-col items-center gap-4">

        <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
          Candidate Search
        </h1>
        <input
          type="text"
          placeholder="Search by CODE, Name, Dars Name, etc."
          value={searchTerm}
          onChange={handleSearch}
          className="w-2/3 px-4 py-2 rounded-xl border-2 border-dashed border-primary"
        />
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {filteredData.map((item, index) => (
            <div
              className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start cursor-pointer"
              key={index}
              onClick={() => openPopup(item)}
            >
              <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                {item.code}
              </h1>
              <p className="line-clamp-2 h-12">{item.name}</p>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center">
            <div className="bg-white p-10 rounded-xl flex flex-col items-center max-w-[400px] text-center">
              <p className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                {selectedItem.code}
              </p>
              <p className="font-bold text-xl text-primary">
                {selectedItem.name}
              </p>
              <p className="font-bold -mt-1 text-sm ">
                {selectedItem.category} Category
              </p>

              <p className="text-sm mt-3 font-bold text-primary">Dars Name</p>
              <p className="font-bold -mt-1 mb-4">{selectedItem.darsname}</p>

              {selectedItem.stage1 ||
              selectedItem.stage2 ||
              selectedItem.stage3 ||
              selectedItem.groupstage1 ||
              selectedItem.groupstage2 ||
              selectedItem.groupstage3 ? (
                <>
                  <p className="bg-primary text-sm text-white px-2 py-1 -mb-2 rounded-lg">
                    stage
                  </p>
                  <div className="border-2 border-dashed border-primary p-3 mb-2 rounded-xl text-center">
                    <p>{selectedItem.stage1}</p>
                    <p>{selectedItem.stage2}</p>
                    <p>{selectedItem.stage3}</p>
                    <p>{selectedItem.groupstage1}</p>
                    <p>{selectedItem.groupstage2}</p>
                    <p>{selectedItem.groupstage3}</p>
                  </div>
                </>
              ) : null}

              {selectedItem.offstage1 ||
              selectedItem.offstage2 ||
              selectedItem.offstage3 ||
              selectedItem.groupoffstage ? (
                <>
                  <p className="bg-primary text-sm text-white px-2 py-1 -mb-2 rounded-lg">
                    offstage
                  </p>
                  <div className="border-2 border-dashed border-primary p-3 mb-2 rounded-xl text-center">
                    <p>{selectedItem.offstage1}</p>
                    <p>{selectedItem.offstage2}</p>
                    <p>{selectedItem.offstage3}</p>
                    <p>{selectedItem.groupoffstage}</p>
                  </div>
                </>
              ) : null}
              <p className="my-3 text-sm">for enquiries contact admin</p>
              <button
                className="bg-red-700 text-white font-bold px-3 py-2 rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div></>
  );
}

export default Search;
