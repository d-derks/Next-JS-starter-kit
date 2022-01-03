import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Grid from "./Grid";
import PageSection from "#components/layout/pageSection/PageSection";
import { times } from "lodash";

export default {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    gutter: {
      control: { type: "number" },
      defaultValue: 1,
      description: "Grid gutter",
    },
    className: {
      control: { type: "text" },
      description: "Option to add utility classes",
    },
    sizes: {
      control: { type: "object" },
      description:
        "Container queries: set in 3 sizes container widths and number of columns. Child elements will respond to container",
    },
  },
} as Meta;

export const Template = (args) => {
  return (
    <PageSection>
      <Grid {...args}>
        {times(6, (index) => (
          <div
            key={index}
            style={{
              border: "var(--color-03) solid 6px",
              height: "20rem",
              display: "flex",
            }}
          >
            <p
              style={{
                margin: "auto",
                textTransform: "uppercase",
                fontWeight: "var(--fontweight-bold)",
                fontSize: "var(--fontsize-l)",
              }}
            >
              Item {index + 1}
            </p>
          </div>
        ))}
      </Grid>
    </PageSection>
  );
};

export const GridFive = Template.bind({});
GridFive.args = {
  sizes: {
    xs: { containerWidth: "370px", columns: 3 },
    sm: { containerWidth: "750px", columns: 4 },
    md: { containerWidth: "1000px", columns: 5 },
  },
  gutter: 3,
};

export const GridFour = Template.bind({});
GridFour.args = {
  sizes: {
    xs: { containerWidth: "400px", columns: 2 },
    sm: { containerWidth: "750px", columns: 3 },
    md: { containerWidth: "1000px", columns: 4 },
  },
  gutter: 2,
};

export const GridThree = Template.bind({});
GridThree.args = {
  sizes: {
    xs: { containerWidth: "400px", columns: 2 },
    sm: { containerWidth: "750px", columns: 2 },
    md: { containerWidth: "1000px", columns: 3 },
  },
};
