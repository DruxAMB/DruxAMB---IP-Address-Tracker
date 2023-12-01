import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Stats from './Stats';
import Map from './Map';

function IpAddress() {

    const [IPAddress, setIPAddress] = useState('');
    const [location, setLocation] = useState('');
    const [timezone, setTimezone] = useState('');
    const [ISP, setISP] = useState('');
    const [coordinates, setCoordinates] = useState({lat: "", lng: ""});

    const fetchLocation = (ipAddress = '') =>{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_S5uuHCbNtuFjRfHDGyP3GOVl5GElK&ipAddress=${ipAddress}`)
        .then((res) => res.json())
        .then((data) => {console.log(data)
            setIPAddress(data.ip);
            setLocation(
                `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
            )
            setTimezone(`UTC ${data.location.timezone}`);
            setISP(`${data.isp}`);
            setCoordinates({lat: data.location.lat, lng:data.location.lng});
        });
    };

    useEffect(() =>{
        fetchLocation();
    }, [])

    return (
        <div className='flex flex-col h-screen relative'>
            <SearchBar fetchLocation={fetchLocation} />
            <Stats ipAddress={IPAddress} location={location} timezone={timezone} isp={ISP} />
            <Map coordinates={coordinates} />
        </div>
    )
}

export default IpAddress
