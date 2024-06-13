import { useState, useEffect } from "react";

const UseFilterData = (data, filter) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!filter) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  }, [data, filter]);

  return filteredData;
};

export default UseFilterData;
