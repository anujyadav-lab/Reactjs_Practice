import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Card from "./shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/pune"
    );
    const json = await data.json();

    console.log(json.page_data.sections.SECTION_SEARCH_RESULT[1].info.resId);
    
    setRestaurantList(json.page_data.sections.SECTION_SEARCH_RESULT);
  };


  const handleFilter = () =>{

    const filteredList = restaurantList.slice(1).filter((restuarant) =>   restuarant?.info.rating.rating_text > 4.0
    );
    console.log(filteredList)

    setFilteredRestaurant(filteredList);

  }


  return restaurantList.length === 0 ? (
    <>
    <Card/>
    </>
  )
  :
   ( <>
    <div className="body">

    <div className="filter">
      <input className="searchInput"
      type="text"
      value={searchText}
      onChange={(e)=>setSearchText(e.target.value)} />

         {/* <button onClick={handleSearch}>search</button> */}
         <button className=" filter-btn" onClick={handleFilter}>top Rated restuarant</button>

    </div>
    
      <div className="res-container">

        {restaurantList.slice(1).map((res) => {
          return <RestaurantCards key={res.info.resId} resData={res.info} />;
        })}


      </div>
    </div>
  </>

)
}
export default Body;
