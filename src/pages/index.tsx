import { GetStaticProps } from "next";
import Head from "next/head";
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
        <Head>
            <title>Starter kit</title>
        </Head>
      <PageSection>
        <Intro title={data.title} leadin={data.leadin} />
        {news?.map((feed: newsFeed) => (
          <Card
            key={feed.id}
            title={feed.title}
            href={`/examples/news/${feed.id}`}
            images={feed.images}
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

  return {
    props: {
      data: data,
      news: allNews,
    },
  };
};

export default Home;
