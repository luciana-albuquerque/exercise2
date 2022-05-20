import { ReactElement, useState } from "react";
import SearchDisplay from '../ProductDisplay/SearchDisplay'
import "./searchbar.scss";
import { GrClose } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { ProductT, StateT } from "../../../interfaces/shared";
import { useSelector } from "react-redux";

export default function Searchbar(): ReactElement {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [query, setQuery] = useState('');
  const [productsFound, setProductsFound] = useState<ProductT[]>([])
  const allProducts: ProductT[] = useSelector((state: StateT) => state.productsReducer.items);
  const handleClick = () => { setOpenSearch(!openSearch) }

  const handleSearch = (input: string) => {
    setQuery(input);
    const filteredList = [...allProducts].filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setProductsFound(filteredList)
  };

  return (
    <div className="search">
      <div className="search-icon">
        {!openSearch ? (
          <div>
            <FaSearch size={12} style={{ color: "$primaryColor", cursor: "pointer" }} onClick={handleClick} />
          </div>
        ) : (
          <div>
            <input type="text" value={query} onChange={(e) => handleSearch(e.target.value)}></input>
            <GrClose size={12} style={{ color: "$primaryColor", cursor: "pointer" }} onClick={handleClick} />
          </div>
        )}
      </div>
      { openSearch && ( query.length !== 0 && <SearchDisplay productsFound={productsFound} /> ) }
    </div>
  );
}
