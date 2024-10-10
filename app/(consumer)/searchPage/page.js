"use client"
import SearchBar from "/components/search/page";
import Button from "/components/button/page";
import BusinessCardList from "@/components/cardList/page";
import BusinessCard from "@/components/businessCard/page";
import Image from "next/image";
import { useState } from "react";
import { search_Results } from "@/app/utils/arrays";
import "./searchPage.css";

const searchResults = () => {

  const [grid, setGrid] =  useState(true);

  const toggleGridDisplay = () => {
    setGrid(prev => !prev);
  }
  
  return (
    <main>
      <div className="wrap">
        <div className="search-wrapp">
          <SearchBar className="searchbar" type="text" placeholder="e.g Food" />
          <Button className="button2" value="Search" />
        </div>

        <div className="option-flex">
          <div className="sort">
            <label className="label">Sort:</label>
            <select name="" id="" className="select">
              <option className="select-option" value="Recommended">
                Recommended
              </option>
              <option className="select-option" value="Most Reviewed">
                Most Reviewed
              </option>
              <option className="select-option" value="Highest Rated">
                Highest Rated
              </option>
            </select>
          </div>
          <Image src={!grid? "/grid_view.svg" : "/list_view.svg"} width="24" height="24" onClick={toggleGridDisplay} />
        </div>
      </div>

      <div className="section-two">
        <div>
          <form action="">
            <div className="filter-section">
              <p className="title">Filters</p>
              <button className="clr-btn">Clear all</button>

              <legend className="header">Category:</legend>
              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Food</label>
                <br />
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Beer, Wine, Spirits</label>
                <br />
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ice Cream, Parfait</label>
              </div>
            </div>

            <hr />
            <div className="filter-section">
              <legend className="header">Location:</legend>
              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">near me</label>
                <br />
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">within OAU campus</label>
                <br />
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">within Maintenance</label>
                <br />
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">within Mayfair</label>
              </div>
            </div>

            <hr />
            <div className="filter-section">
              <legend className="header">Ratings:</legend>
              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">4.0 - 5.0</label>
                <br />
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">3.0 - 3.9</label>
                <br />
              </div>
            </div>
          </form>
        </div>

        <div className="search-container">
          <p className="title">All ‘Food’ results</p>

          <div className={grid? "search-grid" : "switch-offcard"}>
            {search_Results?.map((result, index) => {
              return (
                <BusinessCard
                  key={index}
                  img={result.img}
                  namee={result.name}
                  time={result.time}
                  menu={result.menu}
                  comment={result.comment}
                />
              );
            })}
          </div>

          <div className = {!grid? "search-list" : "switch-offcard"}>
          {search_Results?.map((result, index) => {
              return (
                <BusinessCardList
                  key={index}
                  img={result.img}
                  namee={result.name}
                  time={result.time}
                  menu={result.menu}
                  comment={result.comment}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default searchResults;
