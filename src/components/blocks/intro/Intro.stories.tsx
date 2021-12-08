import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Intro from "./Intro";

export default {
  title: "Components/Intro",
  component: Intro,
  args: {
    title: "‘Get up!’ said the Queen",
    leadin:
      "Very soon the Rabbit noticed Alice, as she went hunting about, and called out to her in an angry tone, ‘Why, Mary Ann, what ARE you doing out here?",
  },
  argTypes: {
    bottomGap: { control: { type: "boolean" }, defaultValue: true },
    title: { control: { type: "text" } },
    leadin: { control: { type: "text" } },
    className: { control: { type: "text" } },
    aligned: {
      control: { type: "radio" },
      defaultValue: "left",
      options: ["left", "center", "right"],
    },
  },
} as Meta;

export const Template = (args) => {
  return <Intro {...args} />;
};

export const Center = Template.bind({});
Center.args = {
  aligned: "center",
};

export const Right = Template.bind({});
Right.args = {
  aligned: "right",
};
