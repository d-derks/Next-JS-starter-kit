import fetch from "node-fetch";

export const getAllNews = async () => {
  const response = await fetch(
    "https://starterkit-next-js-default-rtdb.firebaseio.com/news.json"
  );
  const data = await response.json();

  const newList = [];
  for (const key in data) {
    newList.push({
      id: key,
      ...data[key],
    });
  }

  return {
    newList,
  };
};

export const getAllStandardNews = async () => {
  const allNews = await getAllNews();
  return allNews.newList.filter((item) => item.category === "standard");
};

export const getAllEntertainmentNews = async () => {
  const allNews = await getAllNews();
  return allNews.newList.filter((item) => item.category === "entertainment");
};

export const getNewsById = async (id) => {
  const allNews = await getAllNews();
  return allNews.newList.find((item) => item.id === id);
};
