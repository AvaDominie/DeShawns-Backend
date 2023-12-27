import { Link } from "react-router-dom";
import { getDogs } from "./apiManager";
import { useEffect, useState } from "react";

export default function Dogs() {
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
                                return <Link to={`/dog-detail/${dog.id}`}>
                                    <li key={dog.id} value={dog.id}>{dog.name}</li>
                                </Link>
                            }
                        )
                    }
                </ul>
            </div>
        </>
    )
}
