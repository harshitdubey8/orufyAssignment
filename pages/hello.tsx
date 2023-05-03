import { dummyData, DummyData, filters } from "./dummydata";
import { useState, useEffect, ChangeEvent } from "react";
import Card from "./Card";
import Filter from "./Filter";
import DropDown from "./DropDown";

// styles

import HomeStyles from "../styles/homeStyles.module.css";

// icons
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import MenuIcon from "@mui/icons-material/Menu";

function Home() {
  const [products, setProducts] = useState(dummyData);
  const [search, setSearch] = useState("");

  const [rating, setRating] = useState(filters.rating);
  const [price, setPrice] = useState(filters.price);
  const [category, setCategory] = useState(filters.category);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    setProducts(
      dummyData.filter((data) => data.name.toLowerCase().includes(value))
    );
  };

  const categoryHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setCategory((prevState) => {
      const updatedState = prevState.map((item) =>
        item.value === value ? { value, checked } : item
      );
      return updatedState;
    });
  };
  const priceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setPrice((prevState) => {
      const updatedState = prevState.map((item) =>
        item.value === value ? { value, checked } : item
      );
      return updatedState;
    });
  };

  const ratingHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setRating((prevState) => {
      const updatedState = prevState.map((item) =>
        item.value === value ? { value, checked } : item
      );
      return updatedState;
    });
  };

  const handlerFilter = () => {
    const filteredProducts = dummyData.filter((data) => {
      let includeCategory = false,
        includePrice = false,
        includeRating = false;
      const checkedCategories = category.filter((item) => item.checked);
      const checkedPrices = price.filter((item) => item.checked);
      const checkedRatings = rating.filter((item) => item.checked);
      if (
        !checkedCategories.length &&
        !checkedPrices.length &&
        !checkedRatings.length
      )
        return true;
      if (!checkedCategories.length) {
        includeCategory = true;
      }
      if (!checkedPrices.length) {
        includePrice = true;
      }
      if (!checkedRatings.length) {
        includeRating = true;
      }
      checkedCategories.forEach((item) => {
        if (!includeCategory) {
          includeCategory = data.category
            .toLowerCase()
            .includes(item.value.toLowerCase());
        }
      });
      checkedRatings.forEach((item) => {
        if (!includeRating) {
          includeRating = data.rating <= Number(item.value);
        }
      });
      checkedPrices.forEach((item) => {
        if (!includePrice) {
          includePrice = data.price < Number(item.value);
        }
      });
      return includeCategory && includeRating && includePrice;
    });
    setProducts(filteredProducts);
  };

  useEffect(() => {
    handlerFilter();
  }, [category, price, rating]);

  return (
    <div className={HomeStyles.mainWrapper}>
      <header className={HomeStyles.header}>
        <img
          className={HomeStyles.logoImage}
          src="https://www.transparentpng.com/thumb/nike-logo/BC26mv-nike-logo-free-cut-out.png"
        />
        <div className={HomeStyles.searchContainer}>
          <input placeholder="search" value={search} onChange={searchHandler} />
          <SavedSearchIcon />
        </div>

        <div className={HomeStyles.category}>
          <MenuIcon />
          <h2> categories</h2>
        </div>
        <NotificationAddIcon />
        <img
          className={HomeStyles.userImage}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOBOvvep9FFZR2wIu-nD0-Xdg0IIqQPWeiZTRyAk6&s"
        />
      </header>

      <div className={HomeStyles.homeWrapper}>
        <Filter
          setCategory={categoryHandler}
          setRating={ratingHandler}
          setPrice={priceHandler}
          price={price}
          category={category}
          rating={rating}
        />

        {/* Data will appear here */}
        <div className={HomeStyles.productSection}>
          <div className={HomeStyles.dropDownContainer}>
            <h2> Home / Home Decoration / Artifical</h2>
            <DropDown data={products} onSort={setProducts} />
          </div>
          <div className={HomeStyles.productContainer}>
            {products.map((item: DummyData) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
