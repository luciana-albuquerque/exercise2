import React, { useState } from "react";
import ProductDisplay from "../ProductDisplay";
import "./searchbar.scss";
import { GrClose } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [productsFound, setProductsFound] = useState([])
  const handleClick = () => setOpenSearch(!openSearch);
  const allProducts = JSON.parse(localStorage.getItem("products"));

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filteredList = allProducts.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductsFound(filteredList)
  };

  return (
    <div className="search">
      <div className="search-icon">
        {!openSearch ? (
          <div>
          <FaSearch
            size={12}
            style={{ color: "$primaryColor" }}
            onClick={handleClick}
          />
          </div>
        ) : (
          <div>
            <input type="text" value={query} onChange={handleSearch}></input>
            <GrClose
              size={12}
              style={{ color: "$primaryColor" }}
              onClick={handleClick}
            />
          </div>
        )}
      </div>
      { openSearch && ( query.length !== 0 && <ProductDisplay list={productsFound} /> ) }
    </div>
  );
}
