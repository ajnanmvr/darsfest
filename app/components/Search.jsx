"use client"
import React, { useState } from 'react';
import Data from '../../data/FullData.json';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = Data.filter((item) => {
    const searchFields = [
      'code',
      'name',
      'darsname',
      'category',
      'offstage1',
      'offstage2',
      'offstage3',
      'stage1',
      'stage2',
      'stage3',
      'groupstage',
      'groupoffstage',
    ];
    return searchFields.some((field) => {
      const fieldValue = item[field] || ''; // Ensure a default value if the field is undefined
      return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by CODE, Name, Dars Name, etc."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredData.map((item, index) => (
          <div key={index}>
            <h1>{item.code}</h1>
            <p>{item.name}</p>
            {/* Add additional fields here as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;