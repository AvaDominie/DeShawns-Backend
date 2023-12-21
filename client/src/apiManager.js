


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