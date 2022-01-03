import React from "react";
import BasePageLayout from "#components/layout/basePageLayout/BasePageLayout";
import PageSection from "#components/layout/pageSection/PageSection";
import Typography from "#components/common/typography/Typography";

type PageNotFoundProps = {
  text: string;
};

const PageNotFound = ({ text = "Page not found" }: PageNotFoundProps) => {
  return (
    <BasePageLayout>
      <PageSection>
        <Typography text={text} variant="h1" />
      </PageSection>
    </BasePageLayout>
  );
};

export default PageNotFound;
