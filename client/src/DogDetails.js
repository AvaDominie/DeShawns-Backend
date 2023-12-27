import { useEffect, useState } from "react";
import { getDogById, getWalkerById } from "./apiManager";
import { useParams } from "react-router-dom";



export default function DogDetail() {

    const [dogs, setDogs] = useState([]);
    const [walkers, setWalkers] = useState([]);
    const { dogId } = useParams();
    const walkerId = dogs.walkerId;




    useEffect(() => {
        getDogById(dogId)
            .then((data) => {
                // Check if data is an array
                if (Array.isArray(data)) {
                    // Select the dog with the matching ID
                    const dog = data.find(dog => dog.id == dogId);
                    if (dog) {
                        setDogs(dog);
                    }
                } else {
                    setDogs(data);
                }
            })
            .then(() => {
                // Fetch the walker after the dog data has been loaded
                getWalkerById(walkerId)
                    .then((data) => {
                        if (Array.isArray(data)) {
                            // Select the walker with the matching ID
                            const walker = data.find(walker => walker.id == walkerId);
                            if (walker) {
                                setWalkers(walker);
                            }
                        } else {
                            setWalkers(data);
                        }
                    })
                    .catch((error) => {
                        console.error("An error occurred:", error);
                    });
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
    }, [dogId, walkerId]);



    console.log(dogId)
    console.log(dogs.name)
    console.log(dogs.walkerId)



    return (
        <>
            <h2>Dog Details</h2>
            <div id="dog">
                <p>{dogs.name}</p>
                <p>Current walker: {walkers.name}</p>
            </div>
        </>
    )


}






















