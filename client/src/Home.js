
import { useNavigate } from "react-router-dom";
import Dogs from "./Dog";
import { getGreeting, getDogs } from "./apiManager";
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });
  const [dogList, setDogList] = useState({})

    const navigate = useNavigate()


  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);
  console.log(dogList);


  useEffect(() => {
    getDogs()
      .then((data) => {
        // Convert data to an array if it's an object
        if (typeof data === 'object' && data !== null) {
          setDogList(Object.values(data));
        } else {
          setDogList(data);
        }
      })
      .catch(() => {
        console.log("API not connected");
      });
  }, []);


  const LinktoDogForm = () => {
    navigate(`/add-dog`)
  }


  console.log("working")
  return (
    <div>
      <p>{greeting.message}</p>
      <Dogs />
      <button className="add-dog-form-button" onClick={LinktoDogForm}>Add Dog</button>
    </div>
  )
}
