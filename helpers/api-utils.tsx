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

export async function getAllStandardNews() {
  const allNews = await getAllNews();
  return allNews.newList.filter((item) => item.category === "standard");
}

export async function getAllEntertainmentNews() {
  const allNews = await getAllNews();
  return allNews.newList.filter((item) => item.category === "entertainment");
}
