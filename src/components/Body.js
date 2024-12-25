import { useState } from "react";
import resData from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body = () =>{

    const [restaurentList, setRestaurentList]= useState(resData);

    return (
     <div className="body">
        <button className="top-btn" 
        onClick={()=>{
           const filteredList = restaurentList.filter((res)=>res.rating>4.5);
           setRestaurentList(filteredList);
        }}
        >Filter top restaurents</button>
        <div className="res-container">
           {restaurentList.map((restaurent) => (<RestaurentCard key={restaurent.id} resobj={restaurent}/>))}
        </div>
     </div>
    )
}

export default Body;