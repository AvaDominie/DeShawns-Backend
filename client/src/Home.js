
import Dogs from "./Dog";
import { getGreeting, getDogs } from "./apiManager";
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });
  const [dogList, setDogList] = useState({})



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



  console.log("working")
  return (
    <div>
      <p>{greeting.message}</p>
      <Dogs />
      
    </div>
  )
}
