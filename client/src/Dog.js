import { getDogs } from "./apiManager";
import { useEffect, useState } from "react";

export const Dogs = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        getDogs()
            .then((data) => {
                // Convert data to an array if it's an object
                if (typeof data === 'object' && data !== null) {
                    setDogs(Object.values(data));
                } else {
                    setDogs(data);
                }
            })
            .catch(() => {
                console.log("API not connected");
            });
    }, []);

    return (
        <>
            <h2>All Dogs</h2>
            <div id="dog">
                <ul>
                    {
                        dogs.map(
                            (dog) => {
                                return <li key={dog.id} value={dog.id}>{dog.name}</li>
                            }
                        )
                    }
                </ul>
            </div>
        </>
    )
}
