import { dummyData, DummyData, filters } from "./dummydata";
import { useState, ChangeEvent } from "react";
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
      setProducts(
        dummyData.filter((data) => {
          let includeData = false;
          const checkedFilter = updatedState.filter((item) => item.checked);
          if (!checkedFilter.length) return true;
          checkedFilter.forEach((item) => {
            if (!includeData) {
              includeData = data.category
                .toLowerCase()
                .includes(item.value.toLowerCase());
            }
          });
          return includeData;
        })
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
      setProducts(
        dummyData.filter((data) => {
          let includeData = false;
          const checkedFilter = updatedState.filter((item) => item.checked);
          if (!checkedFilter.length) return true;
          checkedFilter.forEach((item) => {
            if (!includeData) {
              includeData = data.price < Number(item.value);
            }
          });
          return includeData;
        })
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
      setProducts(
        dummyData.filter((data) => {
          let includeData = false;
          const checkedFilter = updatedState.filter((item) => item.checked);
          if (!checkedFilter.length) return true;
          checkedFilter.forEach((item) => {
            if (!includeData) {
              includeData = data.rating <= Number(item.value);
            }
          });
          return includeData;
        })
      );
      return updatedState;
    });
  };

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
