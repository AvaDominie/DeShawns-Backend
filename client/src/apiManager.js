


export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};


export const getCities = async () => {
  const res = await fetch("/api/cities");
  const data = await res.json();
  return data
}

export const getDogs = async () => {
  const res = await fetch("/api/dogs");
  const data = await res.json();
  return data
}

export const getWalkers = async () => {
  const res = await fetch("/api/walkers");
  const data = await res.json();
  return data
}


export const getDogById = async (id) => {
  const res = await fetch(`/api/dogs?id=${id}`);
  const data = await res.json();
  return data
}


export const getWalkerById = async (id) => {
  const res = await fetch(`/api/walkers?id=${id}`);
  const data = await res.json();
  return data
}



export const CreateNewDog = async (dog) => {
  const res = await fetch(`/api/dogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dog),
  });
  const data = await res.json();
  return data;
}


// export const CreateNewDog = async () => {
//   const order = {
//       name: "Pumpkin",
//       cityId: 1,
//       walkerId: 3,
//       } 
//   await fetch("/api/dogs", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(order)
//   });
//   document.dispatchEvent(new CustomEvent("stateChanged"));
// };
