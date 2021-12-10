import React from "react";
import BasePageLayout from "#layout/basePageLayout/BasePageLayout";
import PageSection from "#layout/pageSection/PageSection";
import Intro from "#components/blocks/intro/Intro";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllStandardNews, getNewsById } from "../../../../helpers/api-utils";

import Typography from "#components/common/typography/Typography";

const NewsPage = ({ data }) => {
  if (!data) {
    return <p>...loading</p>;
  }

  return (
    <BasePageLayout>
      <PageSection>
        <Intro title={data.title} leadin={data.leadin} />
        <Typography text={data.text} variant="p" />
      </PageSection>
    </BasePageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const newsItemId = context.params.standardNewsId;
  const newsItem = await getNewsById(newsItemId);

  return {
    props: {
      data: newsItem,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allNews = await getAllStandardNews();
  const paths = allNews.map((item) => ({
    params: { standardNewsId: item.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export default NewsPage;
