import React, { useState } from "react";
import iconImage from "../images/icon-arrow.svg";

function SearchBar({fetchLocation}) {
    const [ipAddress, setIpAddress] = useState("");

    const handleClick = () =>{
        setIpAddress(ipAddress);
        fetchLocation(ipAddress);
    }

  return (
    <div className="h-2/5 min-w-full search-bar-container bg-cover flex flex-col gap-5 justify-center items-center">
      <h2 className="text-white text-xl font-bold items-center">IP Address Tracker</h2>
      <div className="md:w-1/2 lg:w-2/5 flex justify-center items-center h-10">
        <input
          type="text"
          className="w-4/5 h-full rounded-s-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground"
          placeholder="Enter the IP Address here.."
          onChange={(e) =>setIpAddress(e.target.value)}
        />
        <div className="bg-black w-14 h-full flex justify-center items-center rounded-e-md cursor-pointer" onClick={handleClick}>
          <img src={iconImage} alt="arrow-icon" className="px-3 py-2" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
