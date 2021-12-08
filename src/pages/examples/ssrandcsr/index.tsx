import BasePageLayout from "#layout/basePageLayout/BasePageLayout";
import React, { useEffect, useState } from "react";
import Typography from "#components/common/typography/Typography";
import PageSection from "#layout/pageSection/PageSection";
import { newsFeed } from "#types";
import Card from "#components/common/card/Card";
import useSWR from "swr";
import fetch from "node-fetch";

const NewsPage = ({ props }) => {
  const [newsData, setNewsData] = useState<any[]>(props);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    "https://starterkit-next-js-default-rtdb.firebaseio.com/news.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const newDataList = [];
      for (const key in data) {
        newDataList.push({
          id: key,
          title: data[key].title,
          leadin: data[key].leadin,
          text: data[key].text,
          media: data[key].media,
        });
      }
      setNewsData(newDataList);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data || !newsData) {
    return <p>Is loading...</p>;
  }

  return (
    <BasePageLayout>
      <Typography text="News Feeds" variant="h1" />
      <PageSection>
        {newsData?.map((newsItem: newsFeed) => (
          <Card
            key={newsItem.id}
            title={newsItem.title}
            leadin={newsItem.leadin}
            media={{
              src: newsItem.media.src,
              width: "3",
              height: "2",
            }}
          />
        ))}
      </PageSection>
    </BasePageLayout>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://starterkit-next-js-default-rtdb.firebaseio.com/news.json"
  );
  const data = await response.json();

  const newDataList = [];
  for (const key in data) {
    newDataList.push({
      id: key,
      title: data[key].title,
      leadin: data[key].leadin,
      media: data[key].media,
    });
  }
  return {
    props: {
      newsData: newDataList,
    },
  };
};

export default NewsPage;
