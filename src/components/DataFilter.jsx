import React, { useState } from "react";
import UseFilterData from "../hooks/UseFilterData";

const DataFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    { name: "Anthony", age: 25, job: "Developer" },
    { name: "Daniel", age: 30, job: "Designer" },
    { name: "Charles", age: 35, job: "Engineer" },
    { name: "David", age: 40, job: "Doctor" },
    { name: "Evelyn", age: 45, job: "Teacher" },
  ];
  const filteredData = UseFilterData(data, searchTerm);

  return (
    <div className="p-8 border-solid border-2 border-gray-600 rounded-md shadow-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="p-2 border border-gray-300 rounded-md w-full mb-4"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index} className="p-2 border-b border-gray-200">
            {item.name} - {item.age} - {item.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilter;
