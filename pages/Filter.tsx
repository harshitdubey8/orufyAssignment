import React, { ChangeEvent, useState } from "react";

import FilterStyles from "../styles/filterStyle.module.css";
import { filterType, filters } from "./dummydata";

import TuneIcon from "@mui/icons-material/Tune";

interface FilterPropTypes {
  setCategory: (event: ChangeEvent<HTMLInputElement>) => void;
  setRating: (event: ChangeEvent<HTMLInputElement>) => void;
  setPrice: (event: ChangeEvent<HTMLInputElement>) => void;
  price: filterType[];
  category: filterType[];
  rating: filterType[];
}

function Filter(props: FilterPropTypes) {
  return (
    <div className={FilterStyles.filerContainer}>
      <div className={FilterStyles.filterHeading}>
        <h2>Filters</h2>
        <TuneIcon />
      </div>

      <div className={FilterStyles.checkBoxContainer}>
        <p>Category</p>
        {props.category.map((option) => (
          <div className={FilterStyles.inputContainer} key={option.value}>
            <input
              value={option.value}
              checked={option.checked}
              type="checkbox"
              name="category"
              id={option.value}
              onChange={props.setCategory}
            />
            <label htmlFor="category">{option.value}</label>
          </div>
        ))}
      </div>

      <div className={FilterStyles.checkBoxContainer}>
        <p>Rating</p>
        {props.rating.map((option) => (
          <div className={FilterStyles.inputContainer} key={option.value}>
            <input
              value={option.value}
              checked={option.checked}
              type="checkbox"
              name="rating"
              id={option.value}
              onChange={props.setRating}
            />

            <label htmlFor="rating">{option.value}</label>
          </div>
        ))}
      </div>

      <div className={FilterStyles.checkBoxContainer}>
        <p>Price</p>
        {props.price.map((option) => (
          <div className={FilterStyles.inputContainer} key={option.value}>
            <input
              value={option.value}
              checked={option.checked}
              type="checkbox"
              name="price"
              id={option.value}
              onChange={props.setPrice}
            />
            <label htmlFor="price">{option.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
