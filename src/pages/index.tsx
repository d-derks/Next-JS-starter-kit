import { GetStaticProps } from "next";
import BasePageLayout from "src/layout/basePageLayout/BasePageLayout";
import PageSection from "../layout/pageSection/PageSection";
import { getAllStandardNews } from "../../helpers/api-utils";
import Intro from "#components/blocks/intro/Intro";
import Card from "#components/common/card/Card";
import { newsFeed } from "#types";
import fetch from "node-fetch";

const Home = ({ data, news }) => {
  return (
    <BasePageLayout home>
      <PageSection>
        <Intro title={data.title} leadin={data.leadin} />
        {news?.map((feed: newsFeed) => (
          <Card
            key={feed.id}
            title={feed.title}
            media={{
              src: feed.media.src,
              width: "3",
              height: "2",
            }}
          />
        ))}
      </PageSection>
    </BasePageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allNews = await getAllStandardNews();
  const response = await fetch(
    "https://starterkit-next-js-default-rtdb.firebaseio.com/.json"
  );
  const data = await response.json();
  //const filteredNews = allNews.filter((item) => item.category === "standard");
  return {
    props: {
      data: data,
      news: allNews,
    },
  };
};

export default Home;
