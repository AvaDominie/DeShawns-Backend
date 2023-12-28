import { useEffect, useState } from "react";
import { getCities, getWalkers } from "./apiManager";




export default function Walkers() {
    const [walkers, setWalkers] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [filteredWalkers, setFilteredWalkers] = useState([]);

    useEffect(() => {
        getWalkers().then((data) => {
            setWalkers(data);
        });
    }, []);

    useEffect(() => {
        getCities().then((data) => {
            setCities(data);
        });
    }, []);

    useEffect(() => {
        if (selectedCity == "") {
            setFilteredWalkers(walkers);
           } else {
            setFilteredWalkers(walkers.filter((walker) => walker.cityId == selectedCity));
           }
    }, [selectedCity, walkers]);


    console.log("filtered walkers", filteredWalkers)
    console.log("selected city", selectedCity)
    return (
        <div>
            <h2>All Walkers</h2>
            <label>Choose a City</label>
            <select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
            <option value="">Select</option>
                {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>
            <div id="walker">
                <ul>
                    {
                        filteredWalkers.map((walker) => (
                            <li key={walker.id}>Name: {walker.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

