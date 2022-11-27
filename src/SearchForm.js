import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  let {searchedWord,setSearchedWord} = useGlobalContext()
  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input type="text" className="form-input" value={searchedWord} onChange={(e)=>{setSearchedWord(e.target.value)}}/>
    </form>
  );
};

export default SearchForm;
