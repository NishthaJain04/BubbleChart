const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getRandomNum = (range) => {
  return Math.random() * range;
};

export default fetchData;
