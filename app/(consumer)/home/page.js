"use client"
import "./home.css";
import { useRouter } from "next/navigation";
import SearchBar from "@/components/search/page";
import Button from "@/components/button/page";
import BusinessCard from "@/components/businessCard/page";
import Image from "next/image";
import { categories, cards } from "@/app/utils/arrays";

export default function Home() {

  const path = useRouter();
  const results = () => {
    path.push("./searchPage")
  }
  return (
    <>
      <div className="home-first-section">
        <h1 className="intro-header">
          Explore local businesses
        </h1>

        <p className="intro-desc">
          Connect with local businesses around you.
        </p>

        <div className="search-wrap">
          <SearchBar className="searchbar" type="search" placeholder="restaurant, makeup, clothing..." />
          <Button value="Search" type="search" className="home-button" onClick={results} />
        </div>

        <div className="home-image-wrap">
          <Image className="home-slider-image" src="/food.png" alt="sold items" width="1114" height="360" layout="responsive" />
        </div>

        <div className="categories-section">
          <p className="categories-header">Categories</p>

          <div className="category-grid">
            {categories.map((category) => {
              return (
                <div className="homepage-category" key={category.id}>
                  <Image src={category.image} alt="omooo" width="48" height="48" />
                  <p className="category-title">{category.title}</p>
                </div>
              )
            })}
          </div>

          <div className="business-grid-wrap">
            <p className="categories-header">
              Most Reviewed Businesses
            </p>

            <div className="business-grid">
              {
                cards.map((card, index) => {
                  return (
                    <BusinessCard
                      key={index} img={card.img} namee={card.name} comment={card.comment}
                    />
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
