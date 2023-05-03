import React, { useState } from "react";
// import "./Dropdown.css"; // import the CSS file
import { DummyData } from "./dummydata";

interface Props {
  data: DummyData[];
  onSort: (sortedData: DummyData[]) => void;
}

const Dropdown: React.FC<Props> = ({ data, onSort }) => {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);

    if (event.target.value === "priceLow") {
      const sortedData: DummyData[] = data.sort((a, b) => a.price - b.price);
      onSort([...sortedData]);
    } else if (event.target.value === "priceHigh") {
      const sortedData = data.sort((a, b) => b.price - a.price);
      onSort([...sortedData]);
    } else {
      // default sort order
      onSort([...data]);
    }
  };

  return (
    <div className="dropdown">
      <select id="sort" value={sortOption} onChange={handleSortChange}>
        <option value="default">sort by</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Dropdown;
